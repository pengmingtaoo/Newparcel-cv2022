 // 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('skills'));

 // 指定图表的配置项和数据
const option = {
    backgroundColor: '#fff',
    
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '技能',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 350, name: '静态页面' },
          { value: 260, name: '编程基础' },
          { value: 335, name: 'Vue 全家桶' },
          { value: 310, name: 'React 全家桶' },
          { value: 274, name: '项目开发能力' },
          { value: 270, name: '沟通能力' }
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: '#666'
        },
        labelLine: {
          lineStyle: {
            color: '#666'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
  
 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);