
// searchVideos()
// async function searchVideos()
// {

// try
// {
//  var name=document.querySelector("#search").value;
//  console.log(name)
//  var res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}&type=video&key=AIzaSyBQIfwrM7cCtzirvwmb5oifYrrjOeAw6v8&maxResults=20`);

//   var data =await res.json();
//  // console.log(data)
//   var video=data.items
 
//  recomndation(video)
//   showThanbNail(video)
// }catch(e)
// {
//  console.log(e)
// }
//  }
// defaultVideos()

// // popular default video
//  async function defaultVideos()
// {

// try{
//  var name=document.querySelector("#search").value;
//  console.log(name)
//  let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&regionCode=IN&type=video&=[key]&maxResults=20`)
//   var data =await res.json();
//  // console.log(data)
//   var video=data.items
//  //console.log(data)
//  recomndation(video)
//   showThanbNail(video)
// }catch(e)
// {
// console.log(e)
// }
//  }


//  function showThanbNail(video)
//  {
//   console.log(video)
//    document.querySelector("#search_results").innerHTML=""
//    video.map(({snippet,id:{videoId}})=>
//    {
//        console.log(snippet)
//    var maindiv=document.createElement("div");

// var thambnail=document.createElement("img");
// thambnail.src=snippet.thumbnails.high.url
// //console.log(elem.snippet.thumbnails.high.url)
// var title=document.createElement("H4");
// title.textContent=snippet.title
// maindiv.append(thambnail,title);
// //console.log(elem);
// let data_to_dend=
// {
// snippet,
// videoId
// }
// maindiv.addEventListener("click",function()
// {
// showVideo(data_to_dend)
// })
// document.querySelector("#search_results").append(maindiv)
//    })
   
// }


// // show video
// function showVideo(data)
// {
//  localStorage.setItem("clickedVideo", JSON.stringify(data))
//  window.location.href="video.html"
// }

// function recomndation(rec)
// {
//  localStorage.setItem("recomnded", JSON.stringify(rec))
// }
