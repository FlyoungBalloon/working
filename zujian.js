var dataObject = [{
    flag: '亚马逊',
    currencyCode: '网购-电购',
    currency: '洗衣机',
    level: '创造',
    units: 6,
    asOf: 7,
    onedChng: 8,
    onedChng9: 9,
    onedChng10: 10,
    onedChng11: 11,
    onedChng12: 12,
    onedChng13: 13,
    onedChng14: 14,
    onedChng15: 15,
    onedChng16: 16,
    onedChng17: 17,
    onedChng18: 18,
    onedChng19: 19,
    onedChng20: 20,
    onedChng21: 21,
    onedChng22: 22,
    onedChng23: 23,
    onedChng24: 24,
    onedChng25: 25,
    onedChng26: 26
  }];
  var hotElement = document.querySelector('#hot');
  var hotElementContainer = hotElement.parentNode;
  var hotSettings = {
    data: dataObject,
    columns: [{
      data: 'flag',
      type: 'text'
    }, {
      data: 'currencyCode',
      type: 'text'
    }, {
      data: 'currency',
      type: 'text'
    }, {
      data: 'level',
      type: 'text'
    }, {
      data: 'units',
      type: 'numeric'
    }, {
      data: 'asOf',
      type: 'numeric',
    }, {
      data: 'onedChng',
      type: 'numeric',
    }, {
      data: 'onedChng9',
      type: 'numeric',
    }, {
      data: 'onedChng10',
      type: 'numeric',
    }, {
      data: 'onedChng11',
      type: 'numeric',
    }, {
      data: 'onedChng12',
      type: 'numeric',
    }, {
      data: 'onedChng13',
      type: 'numeric',
    }, {
      data: 'onedChng14',
      type: 'numeric',
    }, {
      data: 'onedChng15',
      type: 'numeric',
    }, {
      data: 'onedChng16',
      type: 'numeric',
    }, {
      data: 'onedChng17',
      type: 'numeric',
    }, {
      data: 'onedChng18',
      type: 'numeric',
    }, {
      data: 'onedChng19',
      type: 'numeric',
    }, {
      data: 'onedChng20',
      type: 'numeric',
    }, {
      data: 'onedChng21',
      type: 'numeric',
    }, {
      data: 'onedChng22',
      type: 'numeric',
    }, {
      data: 'onedChng23',
      type: 'numeric',
    }, {
      data: 'onedChng24',
      type: 'numeric',
    }, {
      data: 'onedChng25',
      type: 'numeric',
    }, {
      data: 'onedChng26',
      type: 'numeric',
    }],
    stretchH: 'all',
    width: 1300,
    autoWrapRow: true,
    height: 441,
    maxRows: 25,
    rowHeaders: true,
    colHeaders: [
      'Country2',
      'Code3',
      'Currency4',
      'Level5',
      'Units6',
      'Date7',
      'Change8',
      'Change9',
      'Change10',
      'Change11',
      'Change12',
      'Change13',
      'Change14',
      'Change15',
      'Change16',
      'Change17',
      'Change18',
      'Change19',
      'Change20',
      'Change21',
      'Change22',
      'Change23',
      'Change24',
      'Change25',
      'Change26'
    ],
    fixedColumnsLeft: 4,
    nestedHeaders: [
      [
        '', {
          label: '',
          colspan: 1
        }, {
          label: '',
          colspan: 1
        }, {
          label: '',
          colspan: 1
        }, {
          label: '合同内费用',
          colspan: 3
        }, {
          label: '日常促销',
          colspan: 10
        }, {
          label: '',
          colspan: 1
        }, {
          label: '溢价转费用',
          colspan: 6
        }, {
          label: '',
          colspan: 1
        }
      ],
      [
        '客户名称',
        '渠道',
        '品类',
        '项目',
        '变动类',
        '固定类',
        '年返',
        '现场建设补贴',
        '市场推广补贴',
        '赠品补贴',
        '会务补贴',
        '现汇奖励',
        '回款奖励',
        '分销奖励',
        '提货奖励',
        '样机补贴',
        '残机补贴',
        '开业支持费',
        '商业杂费',
        '市场推广',
        '现场建设',
        '导购提成',
        '场发赠品',
        '二次物流',
        '经理预留'
      ]
    ]
  };

  var hot = new Handsontable(hotElement, hotSettings);
