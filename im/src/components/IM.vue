<template>
  <div class="container">
      <div><H1>儿童学数学</H1></div><br>
    <div class="form-group">
        <label for="input1">难度：</label>
        <input type="number" v-model="max" id="input1" />       
    </div>
    <div>
       <h3>总答数：{{count}}&nbsp正确：{{ocount}}&nbsp错误：{{ecount}}</h3> 
    </div>
       <div class="form-group">
           <button class="btn btn-primary btn-lg btn-block" v-on:click="initNumber()">出题</button>
       </div>
    
    <h2>(<span v-show="bn1">{{n1}}</span>){{operation}}(<span v-show="bn2">{{n2}}</span>)=(<span v-show="bn">{{n}}</span>)</h2>
    <img src="./../assets/pig.jpg" v-show="eflag" alt="">
    <img src="./../assets/smile.jpg" v-show="oflag" alt="">
    <div>
        <div class="form-group">
        <label for="input2">答案：</label>        
        <input type="number" v-model="da" id="input2" />
        <button class="btn btn-primary" v-on:click="result(da)">答题</button>   
        </div> 
        <button class="btn btn-primary  btn-lg" v-for="number in max<=50?(parseInt(max)+1):0" v-on:click="result(number-1)">{{number-1}}</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IM',
  data () {
    return {
      n1: 0,
      n2: 0,
      n:0,
      max:20,
      da:'',
      eflag:false,
      oflag:false,
      operation:'+',
      count:0,
      ocount:0,
      ecount:0,
      bn1:true,
      bn2:true,
      bn:true,
      cn:0
    }
  },
  created(){
       this.$options.methods.initNumber.call(this)
  },
    methods:{
        initNumber(){
            this.da=''
            if(Math.random()<0.5) {
                this.operation='+'
            }else{
                this.operation='-'
            }

            this.n1=Math.floor(Math.random()*this.max)
            if(this.operation=='+'){
            this.n2=Math.floor(Math.random()*(this.max-this.n1))
            }else{
                this.n2=Math.floor(Math.random()*this.n1)
            }
            this.n=eval(this.n1+this.operation+this.n2)
            this.oflag=false
            this.eflag=false
            var vn=Math.random()
            if(vn<0.35) {
                this.bn1=false
                this.bn2=true
                this.bn=true
                this.cn=this.n1
            }else if(vn>=0.35 && vn<=0.7){
                this.bn1=true
                this.bn2=false
                this.bn=true
                this.cn=this.n2
            }else{
                this.bn1=true
                this.bn2=true
                this.bn=false
                this.cn=this.n
            }

        },
        result(n){
            this.count++
            console.log(this.cn,n)
            if(this.cn==n){
                this.ocount++
                this.oflag=true
                this.eflag=false
                this.bn1=true
                this.bn2=true
                this.bn=true
                setTimeout(()=>{
                    this.$options.methods.initNumber.call(this) 
                },2000)
            }else{
                this.ecount++
                this.eflag=true
                this.oflag=false
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img{
        height:100px
    }

</style>
