webpackJsonp([29],{iHBT:function(e,n){e.exports='import CSSModules from \'react-css-modules\';\nimport React, { Component } from \'react\';\nimport { allowMultiple } from \'../../../constants\';\nimport Menu from \'../Menu\';\nimport Icon from \'../../icon/Icon\';\nimport styles from \'./index.css\';\n\n@CSSModules(styles, { allowMultiple })\nexport default class MenuDemo extends Component {\n\n  state = {\n    theme: \'dark\',\n    current: \'.$m0\',\n  }\n\n  handleClick = (e) => {\n    // const key = (e.key || \'\').replace(/\\.\\$/g, \'\');\n    this.setState({\n      current: e.key,\n    });\n    // console.log(key);\n  }\n\n  render() {\n    return (\n      <div className="markdown-block">\n        <table style={{ width: \'100%\' }}>\n          <tr>\n            <td colSpan="2">1、水平菜单，子菜单水平</td>\n          </tr>\n          <tr>\n            <th style={{ width: \'50%\' }}>KA</th><th style={{ width: \'50%\' }}>车队加盟</th>\n          </tr>\n          <tr>\n            <td>\n              <Menu\n                onClick={this.handleClick}\n                selectedKeys={[this.state.current]}\n                type="horizontal-h"\n                colorType="warm"\n              >\n\n                <Menu.Item key="m0">\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />\n                  菜单按钮\n                  </Menu.Item>\n                <Menu.SubMenu key="m1" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />下拉菜单</span>}>\n                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m2" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />分组</span>}>\n                  <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>\n                  <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用</span>}>\n                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>\n                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item key="m4" disabled>\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用\n                  </Menu.Item>\n              </Menu>\n            </td>\n            <td>\n              <Menu\n                onClick={this.handleClick}\n                selectedKeys={[this.state.current]}\n                type="horizontal-h"\n                colorType="cold"\n              >\n\n                <Menu.Item key="m0">\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />\n                  菜单按钮\n                  </Menu.Item>\n                <Menu.SubMenu key="m1" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />下拉菜单</span>}>\n                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m2" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />分组</span>}>\n                  <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>\n                  <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用</span>}>\n                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>\n                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item key="m4" disabled>\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用\n                  </Menu.Item>\n              </Menu>\n            </td>\n          </tr>\n          <tr><td style={{ height: \'30px\' }} /><td /></tr>\n          <tr>\n            <td colSpan="2">2、水平菜单，子菜单垂直</td>\n          </tr>\n          <tr>\n            <th style={{ width: \'50%\' }}>KA</th><th style={{ width: \'50%\' }}>车队加盟</th>\n          </tr>\n          <tr>\n            <td>\n              <Menu\n                onClick={this.handleClick}\n                selectedKeys={[this.state.current]}\n                type="horizontal-v"\n                colorType="warm"\n              >\n\n                <Menu.Item key="m0">\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />\n                  菜单按钮\n                  </Menu.Item>\n                <Menu.SubMenu key="m1" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />下拉菜单</span>}>\n                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>\n                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>\n                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m2" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />分组</span>}>\n                  <Menu.ItemGroup key="m2g1" title="分组1">\n                    <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.ItemGroup key="m2g2" title="分组1">\n                    <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.ItemGroup key="m2m2g1" title="分组1">\n                      <Menu.Item key="m2m2g1i1">三级菜单1</Menu.Item>\n                      <Menu.Item key="m2m2g1i2">三级菜单2</Menu.Item>\n                    </Menu.ItemGroup>\n                    <Menu.ItemGroup key="m2m2g2" title="分组2">\n                      <Menu.Item key="m2m2g2i1">三级菜单1</Menu.Item>\n                      <Menu.Item key="m2m2g2i2">三级菜单2</Menu.Item>\n                    </Menu.ItemGroup>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用</span>}>\n                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>\n                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item key="m4" disabled>\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用\n                  </Menu.Item>\n              </Menu>\n            </td>\n            <td>\n              <Menu\n                onClick={this.handleClick}\n                selectedKeys={[this.state.current]}\n                type="horizontal-v"\n                colorType="cold"\n              >\n\n                <Menu.Item key="m0">\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />\n                  菜单按钮\n                  </Menu.Item>\n                <Menu.SubMenu key="m1" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />下拉菜单</span>}>\n                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>\n                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>\n                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m2" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />分组</span>}>\n                  <Menu.ItemGroup key="m2g1" title="分组1">\n                    <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.ItemGroup key="m2g2" title="分组1">\n                    <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.ItemGroup key="m2m2g1" title="分组1">\n                      <Menu.Item key="m2m2g1i1">三级菜单1</Menu.Item>\n                      <Menu.Item key="m2m2g1i2">三级菜单2</Menu.Item>\n                    </Menu.ItemGroup>\n                    <Menu.ItemGroup key="m2m2g2" title="分组2">\n                      <Menu.Item key="m2m2g2i1">三级菜单1</Menu.Item>\n                      <Menu.Item key="m2m2g2i2">三级菜单2</Menu.Item>\n                    </Menu.ItemGroup>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用</span>}>\n                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>\n                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item key="m4" disabled>\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用\n                  </Menu.Item>\n              </Menu>\n            </td>\n          </tr>\n          <tr><td style={{ height: \'30px\' }} /><td /></tr>\n          <tr>\n            <td colSpan="2">3、垂直菜单，子菜单水平向右弹出</td>\n          </tr>\n          <tr>\n            <th style={{ width: \'50%\' }}>KA</th><th style={{ width: \'50%\' }}>车队加盟</th>\n          </tr>\n          <tr>\n            <td>\n              <Menu\n                onClick={this.handleClick}\n                style={{ width: 240, height: 500 }}\n                defaultOpenKeys={[\'.$m1\']}\n                selectedKeys={[this.state.current]}\n                type="vertical-h"\n                colorType="warm"\n              >\n\n                <Menu.Item key="m0">\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />\n                  菜单按钮\n                  </Menu.Item>\n                <Menu.SubMenu key="m1" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />下拉菜单</span>}>\n                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>\n                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>\n                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m2" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />下拉菜单分组</span>}>\n                  <Menu.ItemGroup key="m2g1" title="分组1">\n                    <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.ItemGroup key="m2g2" title="分组1">\n                    <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.ItemGroup key="m2m2g1" title="分组1">\n                      <Menu.Item key="m2m2g1i1">三级菜单1</Menu.Item>\n                      <Menu.Item key="m2m2g1i2">三级菜单2</Menu.Item>\n                    </Menu.ItemGroup>\n                    <Menu.ItemGroup key="m2m2g2" title="分组2">\n                      <Menu.Item key="m2m2g2i1">三级菜单1</Menu.Item>\n                      <Menu.Item key="m2m2g2i2">三级菜单2</Menu.Item>\n                    </Menu.ItemGroup>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />不可用下拉菜单</span>}>\n                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>\n                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item key="m4" disabled>\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用菜单按钮\n                </Menu.Item>\n              </Menu>\n            </td>\n            <td>\n              <Menu\n                onClick={this.handleClick}\n                style={{ width: 240, height: 500 }}\n                defaultOpenKeys={[\'.$m1\']}\n                selectedKeys={[this.state.current]}\n                type="vertical-h"\n                colorType="cold"\n              >\n\n                <Menu.Item key="m0">\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />\n                  菜单按钮\n                  </Menu.Item>\n                <Menu.SubMenu key="m1" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />下拉菜单</span>}>\n                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>\n                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>\n                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m2" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />下拉菜单分组</span>}>\n                  <Menu.ItemGroup key="m2g1" title="分组1">\n                    <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.ItemGroup key="m2g2" title="分组1">\n                    <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.ItemGroup key="m2m2g1" title="分组1">\n                      <Menu.Item key="m2m2g1i1">三级菜单1</Menu.Item>\n                      <Menu.Item key="m2m2g1i2">三级菜单2</Menu.Item>\n                    </Menu.ItemGroup>\n                    <Menu.ItemGroup key="m2m2g2" title="分组2">\n                      <Menu.Item key="m2m2g2i1">三级菜单1</Menu.Item>\n                      <Menu.Item key="m2m2g2i2">三级菜单2</Menu.Item>\n                    </Menu.ItemGroup>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />不可用下拉菜单</span>}>\n                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>\n                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item key="m4" disabled>\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用菜单按钮\n                </Menu.Item>\n              </Menu>\n            </td>\n          </tr>\n          <tr><td style={{ height: \'30px\' }} /><td /></tr>\n          <tr>\n            <td colSpan="2">4、垂直菜单，子菜单内嵌在菜单区域</td>\n          </tr>\n          <tr>\n            <th style={{ width: \'50%\' }}>KA</th><th style={{ width: \'50%\' }}>车队加盟</th>\n          </tr>\n          <tr>\n            <td style={{ verticalAlign: \'top\' }}>\n              <Menu\n                onClick={this.handleClick}\n                style={{ width: 240 }}\n                defaultOpenKeys={[\'.$m1\']}\n                selectedKeys={[this.state.current]}\n                type="vertical-v"\n                colorType="warm"\n              >\n\n                <Menu.Item key="m0">\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />\n                  菜单按钮\n                  </Menu.Item>\n                <Menu.SubMenu key="m1" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />下拉菜单</span>}>\n                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>\n                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>\n                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m2" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />下拉菜单分组</span>}>\n                  <Menu.ItemGroup key="m2g1" title="分组1">\n                    <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.ItemGroup key="m2g2" title="分组1">\n                    <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.Item key="m2m2i1">三级菜单1</Menu.Item>\n                    <Menu.Item key="m2m2i2">三级菜单2</Menu.Item>\n                    <Menu.Item key="m2m2i3">三级菜单3</Menu.Item>\n                    <Menu.Item key="m2m2i4">三级菜单4</Menu.Item>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />不可用下拉菜单</span>}>\n                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>\n                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item key="m4" disabled>\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用菜单按钮\n                  </Menu.Item>\n              </Menu>\n            </td>\n            <td style={{ verticalAlign: \'top\' }}>\n              <Menu\n                onClick={this.handleClick}\n                style={{ width: 240 }}\n                defaultOpenKeys={[\'.$m1\']}\n                selectedKeys={[this.state.current]}\n                type="vertical-v"\n                colorType="cold"\n              >\n\n                <Menu.Item key="m0">\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />\n                  菜单按钮\n                  </Menu.Item>\n                <Menu.SubMenu key="m1" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />下拉菜单</span>}>\n                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>\n                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>\n                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>\n                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>\n                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m2" title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />下拉菜单分组</span>}>\n                  <Menu.ItemGroup key="m2g1" title="分组1">\n                    <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.ItemGroup key="m2g2" title="分组1">\n                    <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>\n                    <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>\n                    <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />三级菜单</span>}>\n                    <Menu.Item key="m2m2i1">三级菜单1</Menu.Item>\n                    <Menu.Item key="m2m2i2">三级菜单2</Menu.Item>\n                    <Menu.Item key="m2m2i3">三级菜单3</Menu.Item>\n                    <Menu.Item key="m2m2i4">三级菜单4</Menu.Item>\n                  </Menu.SubMenu>\n                </Menu.SubMenu>\n                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} /><Icon className={styles[\'menu--icon__pullright\']} size={12} name={\'arrow-right\'} />不可用下拉菜单</span>}>\n                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>\n                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item key="m4" disabled>\n                  <Icon className={styles[\'menu--icon\']} size={14} name={\'attachment\'} />不可用菜单按钮\n                  </Menu.Item>\n              </Menu>\n            </td>\n          </tr>\n        </table>\n      </div>\n    );\n  }\n}\n'}});
//# sourceMappingURL=29.a483d3f959fc44014377.js.map