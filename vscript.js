


const panoramaImage = new PANOLENS.ImagePanorama("DJI_0419.JPG");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

$(".row img").click(function(){
    const panoramaImage = new PANOLENS.ImagePanorama(this["src"]);
    $(".image-container canvas").hide();
    const imageContainer = document.querySelector(".image-container");

    const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});
viewer.add(panoramaImage);
})