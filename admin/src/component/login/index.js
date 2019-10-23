import React,{Component} from 'react'
import { Card,Form, Icon, Input, Button, Checkbox,message } from 'antd';
import './index.less'
import Particles from 'react-particles-js'
class Login extends Component{
  submit=()=>{
    console.log('数据提交')
    // let result = this.props.form.getFieldsValue()
    // console.log(result)    这个方法是获取表单里面的value值
    this.props.form.validateFields((err,data)=>{
      if(err) {
        message.error('输入信息有误请重试')
      } else {
        message.success('登录成功1s后跳转首页',1,()=>{
          this.props.history.push('/admin')
        })
      }
      console.log(err,data)
    })
  }
  register=()=>{
    this.props.history.push('./reg')
  }
  render(){
    console.log(this)
    const { getFieldDecorator } = this.props.form;
    // console.log(getFieldDecorator)
    return(
      <div  className="bg">
        <Particles style={{width:'100vw',height:'100vh'}}/>
      <Card style={{width:'380px',height:'280px',position:'fixed',top:'17vh',right:'7vw'}}>
         <div className="login-form">
        <Form.Item>
          {getFieldDecorator('us',{
            rules:[{required:true,message:'请输入你的用户名!'},
                    {min:6,message:'用户名6到9位'},
                    {max:9,message:'用户名6到9位'},
              ]
          })(
            <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
          )}
            
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('ps',{
               rules:[{required:true,message:'请输入你的密码!'},
               {min:6,message:'密码6到9位'},
               {max:9,message:'密码6到9位'}
              ]
            })(
              <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              />
            )}
        </Form.Item>
        <Form.Item>
          <Checkbox>记住密码</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
        <Button type="primary" onClick={this.submit} className="login-form-button">
            登录
          </Button>
          Or <a href=" " onClick={this.register}>注册</a>

        </Form.Item>
      </div>
      </Card>
      </div>
    )
  }
}
export default Form.create({name:'login'})(Login) 