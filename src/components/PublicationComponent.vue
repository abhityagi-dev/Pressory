<template>
  <div>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="py-10 lg:px-8 px-4">
            <div>
                <h1 class="text-2xl text-black text-center font-bold mb-3">Publications</h1>
            </div>
             <div class="flex justify-between"></div>
              <div class="block w-full overflow-x-auto my-8">
                <table id="myTable" class="border w-full bg-transparent border-collapse border border-slate-400 table-border">
                    <thead class="bg-gray-500 text-white">
                        <tr>
                            <th class="px-3 align-middle py-3 text-sm font-semibold text-left">Publication Name
                                <button id="publicationDownButton">
                                    ↓
                                </button> 
                                <button id="publicationUpButton">
                                    ↑
                                </button>
                            </th> 
                            <th class="px-3 align-middle py-3 text-sm font-semibold text-left w-56">Website
                                <button id="domainDownButton">
                                    ↓
                                </button>
                                 <button id="domainUpButton">
                                    ↑
                                </button>
                            </th>
                             <th class="px-3 align-middle py-3 text-sm font-semibold text-left w-48">County of Origin
                                <button id="originDownButton">
                                    ↓
                                </button>
                                 <button id="originUpButton">
                                    ↑
                                </button>
                            </th> 
                            <th class="px-3 align-middle py-3 text-sm font-semibold text-left w-64">Twitter
                            </th> 
                            <th class="px-3 align-middle py-3 text-sm font-semibold text-left w-64">Wikipedia
                            </th>
                        </tr>
                    </thead>
                    <tbody>
          <tr v-for="data in publication" :key="data.id">
            
            <td class="w-60 text-blue-500">
              {{data.publication}}
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
                <div>
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div class="flex mb-20 pt-8">
                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                  <p class="text-sm text-gray-700">Showing<span class="font-medium">1</span>to<span class="font-medium">20</span>of<span class="font-medium">119</span>results
                                  </p>
                                </div>
                            </div>
                            <div aria-label="Pagination">
                                <ul class="pagination relative z-0 inline-flex rounded-md -space-x-px">
                                    <li class="pagination-item">
                                        <button type="button" disabled="disabled" class="mx-2 py-2 opacity-40">First
                                        </button>
                                    </li>
                                     <li class="relative inline-flex items-center px-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <button type="button" disabled="disabled" class="opacity-40">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </button>
                                    </li> 
                                    <li class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border text-sm font-medium">
                                        <button id="innerNumbers" type="button" disabled="disabled" class="active">1</button>
                                    </li>
                                    <li class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border text-sm font-medium">
                                        <button id="innerNumbers" type="button" class="">2</button>
                                    </li>
                                    <li class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border text-sm font-medium">
                                        <button id="innerNumbers" type="button" class="">3</button>
                                    </li>
                                     <li class="relative inline-flex items-center px-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <button type="button" class="">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">  
                                                </path>
                                             </svg>
                                            </button>
                                    </li>
                                      <li class="pagination-item">
                                        <button type="button" class="mx-2 py-2">Last
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name:'PublicationComponent',
    data(){
      return{
        publish:[],        
      }
    },
    mounted(){
    axios.get('https://pressory.com/api/publication').then((result) =>{
console.log(result);
      result.data.publication.data.map((res)=>{
        this.publish.push(res);
        })
      })
}
}
</script>