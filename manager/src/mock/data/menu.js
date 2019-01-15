const Menu = [
  {
    "type":"el-submenu",
    "title":"导航1",
    "index":"1",
    "items":[
      {"type":"el-menu-item","title":"选项1","index":"11","route":""},
      {"type":"el-menu-item","title":"选项2","index":"12","route":""},
      {"type":"el-menu-item","title":"选项3","index":"13","route":""},
      {"type":"el-submenu","title":"选项4","index":"14","items":[
        {"type":"el-menu-item","title":"选项41","index":"141","route":""},
        {"type":"el-menu-item","title":"选项42","index":"142","route":""},
        {"type":"el-menu-item","title":"选项43","index":"143","route":""}
      ]},
    ]   
  }
  ,
  {"type":"el-submenu","title":"导航2","index":"2","items":[
    {"type":"el-menu-item","title":"21","index":"21","route":"/help"},
    {"type":"el-menu-item","title":"22","index":"22","route":"/about"}
  ]},
  {"type":"el-submenu","title":"导航3","index":"3"},
  {"type":"el-submenu","title":"帮助","index":"4","items":[
    {"type":"el-menu-item","title":"帮助","index":"41","route":"/help"},
    {"type":"el-menu-item","title":"关于","index":"42","route":"/about"}
  ]}
];



export default Menu;
