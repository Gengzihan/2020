import http  from './index'

export function hotlist(){
  return  http.get('/v4//mweb-feed/content/list',{
      params:Option,
       /*  params:{
            category:'yule',
            reload:false,
            utm_source:null,
            count:8
        } */
    })
}