import Mock from 'mockjs'
import {LoginUser, Users } from './data/user'
import Menu from './data/menu'

    Mock.mock('/api/user/login','post',function(){
        return {
            success:true,
            msg:'',
            data:LoginUser
        }
    })

    Mock.mock('/api/user/','get',function(){
        return {
            success:true,
            msg:'',
            data:Users
        }
    })

    Mock.mock('/api/menu/','get',function(){
        return {
            success:true,
            msg:'',
            data:Menu
        }
    })
