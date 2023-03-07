<template>
<div>
  <div class="py-10 lg:px-8 px-4">
    <div>
      <h1 class="text-2xl text-black text-center font-bold mb-3">Articles</h1>
    </div>
    <div class="flex justify-between">
    </div>
    <div class="block w-full overflow-x-auto my-8">
      <table id="myTable" class="border w-full bg-transparent border-collapse border border-slate-400 table-border">
        <thead class="bg-gray-500 text-white">
          <tr>
            <th class="px-3 align-middle py-3 text-sm font-semibold text-left">Article
              <button id="articleDownButton">↓</button>
              <button id="articleUpButton">↑</button>
            </th> 
            <th class="px-3 align-middle py-3 text-sm font-semibold text-left w-48">Author</th>
            <th class="px-3 align-middle py-3 text-sm font-semibold text-left w-48">Publication</th>
            <th class="px-3 align-middle py-3 text-sm font-semibold text-left w-48">Date Article Published</th> 
            <th class="px-3 align-middle py-3 text-sm font-semibold text-left w-48">Date Article Added</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in title" :key="data.id">
            
            <td class="w-60 text-blue-500">
              {{data.title}}
            </td>
            <td class="w-60 text-blue-500" v-for="name in data.articles_authors" :key="name.id" >
              {{ name.author_name }}
            </td>
            <td class="w-60 text-blue-500">
            <div v-if="data.publication">
            {{ data.publication.publication}}
            </div>
            <div v-else>
              {{ "N/A" }}
            </div>
            </td>
            <td>
              {{ $moment(data.published).format('YYYY-MM-DD')  }}
            </td>
            <td>
              {{$moment(data.created_at).format('YYYY-MM-DD')}}
            </td>
          </tr>
          <tr v-for="data in list" :key="data.id">
            
            <td class="w-60 text-blue-500">
              {{data.title}}
            </td>
            <td class="w-60 text-blue-500" v-for="name in data.articles_authors" :key="name.id" >
              {{ name.author_name }}
            </td>
            <td class="w-60 text-blue-500">
            <div v-if="data.publication">
            {{ data.publication.publication}}
            </div>
            <div v-else>
              {{ "N/A" }}
            </div>
            </td>
            <td>
              {{ $moment(data.published).format('YYYY-MM-DD')  }}
            </td>
            <td>
              {{$moment(data.created_at).format('YYYY-MM-DD')}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>  
</template>
<script>
import axios from 'axios';
export default {
    name:'ArticleComponent',
    data(){
      return{
        title:[], 
        list:[],       
      }
    },
    mounted(){
    axios.get('https://pressory.com/api/article').then((result) =>{
        console.log(result);
        result.data.articles.data.map((res)=>{
          this.title.push(res);
        })
      }),
      axios.get(`https://pressory.com/api/article?sort=title&direction=asc&page=1`).then((result) => {    
            console.log(result)
            result.data.articles.data.map((res)=>{
              this.list.push(res);
            })
      })
}
}
</script>