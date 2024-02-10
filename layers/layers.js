var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PELANGGAN_2 = new ol.format.GeoJSON();
var features_PELANGGAN_2 = format_PELANGGAN_2.readFeatures(json_PELANGGAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELANGGAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELANGGAN_2.addFeatures(features_PELANGGAN_2);
var lyr_PELANGGAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PELANGGAN_2, 
                style: style_PELANGGAN_2,
                interactive: true,
                title: '<img src="styles/legend/PELANGGAN_2.png" /> PELANGGAN'
            });
var format_JARINGANPIPA_3 = new ol.format.GeoJSON();
var features_JARINGANPIPA_3 = format_JARINGANPIPA_3.readFeatures(json_JARINGANPIPA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANPIPA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANPIPA_3.addFeatures(features_JARINGANPIPA_3);
var lyr_JARINGANPIPA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JARINGANPIPA_3, 
                style: style_JARINGANPIPA_3,
                interactive: true,
    title: 'JARINGAN PIPA<br />\
    <img src="styles/legend/JARINGANPIPA_3_0.png" /> 50<br />\
    <img src="styles/legend/JARINGANPIPA_3_1.png" /> 90<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_PELANGGAN_2.setVisible(true);lyr_JARINGANPIPA_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_PELANGGAN_2,lyr_JARINGANPIPA_3];
lyr_PELANGGAN_2.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'FOTO': 'FOTO', });
lyr_JARINGANPIPA_3.set('fieldAliases', {'id': 'id', 'PANJANG': 'PANJANG', });
lyr_PELANGGAN_2.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_JARINGANPIPA_3.set('fieldImages', {'id': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_PELANGGAN_2.set('fieldLabels', {'id': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'FOTO': 'no label', });
lyr_JARINGANPIPA_3.set('fieldLabels', {'id': 'inline label - always visible', 'PANJANG': 'inline label - always visible', });
lyr_JARINGANPIPA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});