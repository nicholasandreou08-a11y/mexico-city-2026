/* Simple static server with /api/weather proxy for OpenWeather */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENWEATHER_API_KEY;
const CACHE_MS = 10 * 60 * 1000;
const ROOT = __dirname;

let cache = { ts: 0, data: null };

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'application/json', ...headers });
  res.end(JSON.stringify(body));
}

function mapWeather(raw) {
  const now = raw.current || {};
  const nowWeather = (now.weather && now.weather[0]) || {};
  const daily = Array.isArray(raw.daily) ? raw.daily : [];
  const mappedDaily = daily.map(day => {
    const w = (day.weather && day.weather[0]) || {};
    return {
      dateUnix: day.dt,
      sunriseUnix: day.sunrise,
      sunsetUnix: day.sunset,
      minC: day.temp ? day.temp.min : null,
      maxC: day.temp ? day.temp.max : null,
      popPct: typeof day.pop === 'number' ? Math.round(day.pop * 100) : null,
      humidityPct: day.humidity,
      windSpeedMps: day.wind_speed,
      conditionId: w.id,
      conditionMain: w.main,
      conditionDescEn: w.description,
      iconCode: w.icon
    };
  });

  return {
    source: 'openweather',
    timezone: raw.timezone,
    timezoneOffsetSec: raw.timezone_offset,
    fetchedAtUnix: Math.floor(Date.now() / 1000),
    now: {
      asOfUnix: now.dt,
      timezone: raw.timezone,
      tempC: now.temp,
      feelsLikeC: now.feels_like,
      humidityPct: now.humidity,
      windSpeedMps: now.wind_speed,
      windDeg: now.wind_deg,
      uvi: now.uvi,
      sunriseUnix: now.sunrise,
      sunsetUnix: now.sunset,
      conditionId: nowWeather.id,
      conditionMain: nowWeather.main,
      conditionDescEn: nowWeather.description,
      iconCode: nowWeather.icon
    },
    next7Days: mappedDaily
  };
}

async function getWeather() {
  const now = Date.now();
  if (cache.data && now - cache.ts < CACHE_MS) {
    return cache.data;
  }
  if (!API_KEY) {
    throw new Error('Missing OPENWEATHER_API_KEY');
  }
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=19.4326&lon=-99.1332&units=metric&lang=en&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`OpenWeather error: ${res.status}`);
  }
  const raw = await res.json();
  const mapped = mapWeather(raw);
  cache = { ts: now, data: mapped };
  return mapped;
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.html') return 'text/html; charset=utf-8';
  if (ext === '.css') return 'text/css; charset=utf-8';
  if (ext === '.js') return 'application/javascript; charset=utf-8';
  if (ext === '.svg') return 'image/svg+xml';
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  return 'application/octet-stream';
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/weather') {
    try {
      const data = await getWeather();
      return send(res, 200, data, { 'Cache-Control': 'public, max-age=600' });
    } catch (err) {
      return send(res, 500, { error: 'weather_unavailable' });
    }
  }

  const reqPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(ROOT, decodeURIComponent(reqPath));

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': getContentType(filePath) });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
