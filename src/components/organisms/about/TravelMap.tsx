'use client';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import Am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import Am5themes_Dark from '@amcharts/amcharts5/themes/Dark';
import am5geodata_canadaLow from '@amcharts/amcharts5-geodata/canadaLow';
import am5geodata_italyLow from '@amcharts/amcharts5-geodata/italyLow';
import am5geodata_ukLow from '@amcharts/amcharts5-geodata/ukLow';
import am5geodata_usaLow from '@amcharts/amcharts5-geodata/usaLow';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import { useTheme } from '@/hooks/useTheme';
import { useLayoutEffect } from 'react';

import {
  canadaStatesVisited,
  citiesVisited,
  countriesVisited,
  italyVisitedRegions,
  ukVisitedRegions,
  usStatesVisited,
} from '@/data/about/travel/data';

const TravelMap = () => {
  const { theme } = useTheme();

  let worldColor = '#E1E1E1';
  let visitedColor = '#8FC8E3';
  let visitedRegionColor = '#309ECC';
  let cityColor = '#ffba00';
  if (theme === 'dark') {
    worldColor = '#16233f';
    visitedColor = '#223662';
    visitedRegionColor = '#335298';
    cityColor = '#d29901';
  }

  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    if (theme === 'dark') {
      root.setThemes([Am5themes_Animated.new(root), Am5themes_Dark.new(root)]);
    } else {
      root.setThemes([Am5themes_Animated.new(root)]);
    }

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoNaturalEarth1(),
        homeZoomLevel: 2,
        homeGeoPoint: { longitude: 11, latitude: 45 },
      }),
    );

    chart.set('zoomControl', am5map.ZoomControl.new(root, {}));

    const worldSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
        fill: am5.color(worldColor),
        opacity: 0.75,
      }),
    );

    const worldVisitedSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        include: countriesVisited.map((country) => country.id),
        exclude: ['US', 'IT', 'GB'],
        fill: am5.color(visitedColor),
        opacity: 0.9,
      }),
    );

    const usaVisitedSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow,
        include: usStatesVisited.map((state) => state.id),
        fill: am5.color(visitedRegionColor),
        opacity: 0.9,
      }),
    );

    const canadaVisitedSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_canadaLow,
        include: canadaStatesVisited.map((state) => state.id),
        fill: am5.color(visitedRegionColor),
        opacity: 0.9,
      }),
    );

    const italyVisitedSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_italyLow,
        include: italyVisitedRegions.map((region) => region.id),
        fill: am5.color(visitedRegionColor),
        opacity: 0.9,
      }),
    );

    const ukSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_ukLow,
        include: ukVisitedRegions,
        fill: am5.color(visitedRegionColor),
        opacity: 0.9,
      }),
    );

    const citySeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: 'lat',
        longitudeField: 'lon',
      }),
    );

    citySeries.data.setAll(citiesVisited);

    const container = chart.children.push(
      am5.Container.new(root, {
        layout: root.horizontalLayout,
        x: 20,
        y: 40,
      }),
    );

    const switchButton = container.children.push(
      am5.Button.new(root, {
        themeTags: ['switch'],
        centerY: am5.p50,
        icon: am5.Circle.new(root, { themeTags: ['icon'] }),
      }),
    );

    switchButton.on('active', function () {
      if (switchButton.get('active')) {
        citySeries.bullets.push(() =>
          am5.Bullet.new(root, {
            sprite: am5.Circle.new(root, {
              radius: 4,
              fill: am5.color(cityColor),
              tooltipText: '{name}',
            }),
          }),
        );
      } else {
        citySeries.bullets.clear();
      }
    });

    container.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: 'Toggle Cities',
      }),
    );

    worldSeries.events.on('datavalidated', function () {
      chart.goHome();
    });

    worldVisitedSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    usaVisitedSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    italyVisitedSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    ukSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    canadaVisitedSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    return () => {
      root.dispose();
    };
  }, [cityColor, theme, visitedColor, visitedRegionColor, worldColor]);

  return <div id='chartdiv' className='w-full h-[400px]'></div>;
};

export default TravelMap;
