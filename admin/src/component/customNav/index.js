import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu,Switch,Icon} from 'antd';
import './index.less'
const { SubMenu } = Menu;
let navData=[
  {name:'首页',path:'/admin/home'},
  {name:'用户管理',
   path:'/admin/user',
  //  children:[
  //    {name:'用户列表',path:'/admin/user/list'},
  //    {name:'添加用户',path:'/admin/user/add'},
  //    {name:'删除用户',path:'/admin/user/del'},
  //   ]
  },
  {name:'分类管理',path:'/admin/class'},
  {name:'产品管理',path:'/admin/production'},
  {name:'新闻管理',path:'/admin/new'},
  {name:'评论管理',path:'/admin/comment'},
  {name:'上传管理',path:'/admin/upload'},
  {name:'设置',path:'/admin/setting'},
]

class Nav extends Component{
   state={
    theme:'dark',
    current:'1'
  }
  changeTheme=value=>{
   return  this.setState({
      theme:value?'dark':'skyblue'
    })
  }
  renderitem =(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu title={item.name} key={index} onClick={()=>{
          }}>
            {this.renderitem(item.children)}
          </SubMenu>
        )
      } else{
        return (<Menu.Item onClick={this.jump.bind(this,item.path)} key={index}>{item.name}</Menu.Item>)
      }
    })
  }
  jump=(path)=>{
    this.props.history.push(path)
  }
  render(){
    console.log(this,'自定义导航')
    
    return(
      <div className="nav">
        <div className="top">
        <Icon type="bulb" />
          <Switch 
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="dark"
          unCheckedChildren="skyblue"  
          />
        </div>
       
          <Menu   theme={this.state.theme} 
          selectedKeys={[this.state.current]}
          style={{ width: 200}} 
          mode="vertical" className="themeMenu">
            {this.renderitem(navData)}
          </Menu>
      </div>

    )
  }
}
export default  withRouter(Nav)