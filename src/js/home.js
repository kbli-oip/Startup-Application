export default {
  data: function() {
    pointGauge: {
    }
  },
  bandCreate(value, app) {
    this.pointGauge = app.gauge.create({
      el: '.point-gauge',
      type: 'circle',
      value: value,
      size: 250,
      borderColor: '#2196f3',
      borderWidth: 20,
      valueText: '50%',
      valueFontSize: 41,
      valueTextColor: '#2196f3',
      labelText: ' ',
    });
  },
  bandUpdate(value, text) {
    this.pointGauge.update({
      value: value,
      valueText: 12 + 'point',
      labelText: text,
    });
  },
};
