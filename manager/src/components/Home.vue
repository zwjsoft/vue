<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="4">
				<div class="logo">
					企业管理平台
				</div>
			</el-col>
			<el-col :span="2">
				<div class="tools" @click.prevent="isCollapse=!isCollapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="10" >
				<img :src="LoginUser.avatar" alt="" width="60px">
				<span>{{LoginUser.avatar}}</span>
			</el-col>
  			<el-col :span="8" class="userinfo">
				  <span>{{LoginUser.username}}</span>
				  <span class="userset">
					  <el-dropdown>
						<span class="el-dropdown-link">
							用户设置<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>修改密码</el-dropdown-item>
							<el-dropdown-item>个人信息</el-dropdown-item>
							<el-dropdown-item>默认设置</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				  </span>
				  <span><el-button type="info"  @click="logout">注销</el-button></span>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="isCollapse?'menu-collapsed':'menu-expanded'">
					<el-menu @open="handleOpen" @close="handleClose" :collapse="isCollapse" router="true" :default-active="this.$router.path">
						<el-submenu :index='m.index' v-for="m in Menu" :key="m.index">
							<template slot="title">
							<i class="el-icon-menu"></i>
							<span>{{m.title}}</span>
							</template>
							<component :index="sub.route" :is="sub.type" v-for="sub in m.items" :key="sub.index" v-bind:route="sub.route">
								<span v-if="sub.type=='el-menu-item'"> {{sub.title}}</span>
								<template  v-if="sub.type=='el-submenu'">
									<template slot="title">
									<i class="el-icon-menu"></i>
									<span>{{sub.title}}</span>
									</template>
									<component :index="sub1.index" :is="sub1.type" v-for="sub1 in sub.items" :key="sub1.index">
										<span v-if="sub1.type=='el-menu-item'"> {{sub1.title}}</span>
									</component>
								</template>
							</component>
						</el-submenu>
					</el-menu>
			</aside>
			<section class="content-container">
				<router-view />
			</section>
		</el-col>
	</el-row>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
      	return {
		  LoginUser:{},
		  Menu:{},
          isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
	  },
	  //退出登录
		logout: function () {
			var _this = this;
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('LoginUser');
				_this.$router.push('/login');
			}).catch(() => {

			});
		}
	},
	created(){
		this.LoginUser=JSON.parse(sessionStorage.getItem('LoginUser'))
		axios.get('/api/menu/').then(res=>{
			if(res.data.success){
				this.Menu=res.data.data	
				console.log(this.Menu)
			}
		})
	}
  }

</script>

<style scoped lang="scss">

	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background:lightgray;
			color:#fff;
			.userinfo{
				float:right;
				.userset{
					margin: 10px;
				}
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				//flex:0 0 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				
			}
			.menu-collapsed{
			 	width:60px
			}
			.menu-expanded{
			 	width:230px
			}
			
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
			}
		}
	}
</style>