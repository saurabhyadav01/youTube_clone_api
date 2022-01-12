//      var {videoId,snippet}= JSON.parse(localStorage.getItem("clickedVideo"));
//      document.getElementById("video_details");
//       console.log(videoId)
//      var iframe=document.createElement("iframe");

//      iframe.src=`https://www.youtube.com/embed/${videoId}`;
//      iframe.width="100%";
//      iframe.height="100%";
//       console.log(snippet.title)
//      var title=document.createElement('h4');
//      title.textContent=snippet.title
//      iframe.setAttribute("allowfullscreen","true");
//      document.getElementById("video_details").append(iframe,title)

//      let rec= JSON.parse(localStorage.getItem("recomnded"));
//      showRecVideo(rec)
//    // console.log(rec)
//     function showRecVideo(rec)
//      {
//         rec.map(({snippet,id:{videoId}})=>
//        { 
//          var mainDiv=document.createElement("div")
      
//         let thumbnail=document.createElement("img");
//         thumbnail.setAttribute("id" ,"videoframe");
//       thumbnail.src=snippet.thumbnails.high.url;
     
     
     

//       let data_to_dend=
// {
// snippet,
// videoId
// };
// mainDiv.addEventListener("click",function()
// {
//   showVideo(data_to_dend);
//   console.log("hii")
// })
//       var title=document.createElement('h4');
//      title.textContent=snippet.title
//      title.style.margin="10px"
//     mainDiv.append(thumbnail,title)
//       document.getElementById("recomndation").append(mainDiv)


//     })
//     }


//     function showVideo(data)
//   {
//     localStorage.setItem("clickedVideo", JSON.stringify(data))
//    // window.location.href="video.html"
//  let videoId=data.videoId;


//  iframe.src=`https://www.youtube.com/embed/${videoId}`;
//   }
