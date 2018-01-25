function toggleMintahoeDetails() {
  if (document.getElementById("mintahoe-details").style.display == "none") {
    document.getElementById("mintahoe-details").style.display = "block";
    document.getElementById("mintahoe-button").textContent = "Less...";
  } else {
    document.getElementById("mintahoe-details").style.display = "none";
    document.getElementById("mintahoe-button").textContent = "More...";
  };
};

function toggleProtolabsDetails() {
  if (document.getElementById("protolabs-details").style.display == "none") {
    document.getElementById("protolabs-details").style.display = "block";
    document.getElementById("protolabs-button").textContent = "Less...";
  } else {
    document.getElementById("protolabs-details").style.display = "none";
    document.getElementById("protolabs-button").textContent = "More...";
  };
};

function toggleTutorDetails() {
  if (document.getElementById("tutor-details").style.display == "none") {
    document.getElementById("tutor-details").style.display = "block";
    document.getElementById("tutor-button").textContent = "Less...";
  } else {
    document.getElementById("tutor-details").style.display = "none";
    document.getElementById("tutor-button").textContent = "More...";
  };
};

function toggleVideoDetails() {
  if (document.getElementById("video-details").style.display == "none") {
    document.getElementById("video-details").style.display = "block";
    document.getElementById("video-button").textContent = "Less...";
  } else {
    document.getElementById("video-details").style.display = "none";
    document.getElementById("video-button").textContent = "More...";
  };
};
