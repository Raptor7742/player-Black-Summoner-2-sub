const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Black Summoner - épisode 2 VOSTFR",
      description: "Vous regardez",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/30c52b8f481041c3e629bbf67c90811e.jpe",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m103.syncusercontent.com/mfs-60:50ec60ef50821ddee2828e0f86211a3e=============================/p/Black%20Summoner%202.mp4?allowdd=0&datakey=cAqeyy2+8vXgOnAkSSJhmb2hcEstt66oNFZCUOM37nZOYBtnj7BeuYIR64L30JLJTv/zNd05jg5WYl+Ljk+f4FTS7kWZC2GCrONiWruPzLuxQaZyRxym+0FIGAOm6ExOZsEuxFnJlMZ+NKMR664hQl/+5gomfbhnRzCK1jShiyVqS6V3EUmoVSgmpPceenaTPk7hN703cmr4eiTdfnOTRjPPq/C68rDuZ+juJHSdIPz/GoghsWEL7LNJkaqEJiKnCbroHjt1x21cKLWKpTzeVywYvxwpjS3dMs4XceuD2JDQqDFGZKPJv4apbqX3qBf4/J//zO4AvZ7qRTWrBqz8xA&engine=ln-2.3.7.3&errurl=q2/UoKfoa9R24oBdr0j/qe3pO5u9Rnyme1uxvPfgmqh8vM84AZDhQs5mR38llP5Dfibyd3Zzgx5Ky8cSgjogzZq8p9E27F5bUg1n9Rqx106KTZaWaG/Z7p1bsEgnyQTn84wW3ZzZxinbQfZalZQOxlMqngCUygRL7f1SbekgKjvElvT3PJsn8tYTXE72RAinIIw0hRT2eJogkhiAUuyNszMpHShlxxAM13BsT8cRDoY7CgNUU/eDb6YrRXUqC3RQMIQbb45tAohFt/gvUaZGR7kY/lmFWYRAEBqntsTHj/Ur4K3UDIlvqCNxZUQSfjrNOw96wKzUnCoBtfNkziKfHw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQmxhY2slMjBTdW1tb25lciUyMDIubXA0IjtmaWxlbmFtZSo9VVRGLTgnJ0JsYWNrJTIwU3VtbW9uZXIlMjAyLm1wNDs&ipaddress=1458994159&linkcachekey=60f83e360&linkoid=1542710012&mode=101&sharelink_id=8008837730012&timestamp=1672575959561&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=cafea94dd4179eb7f86beedab43180e19cc476d4&cachekey=60:50ec60ef50821ddee2828e0f86211a3e=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "https://cdn.jwplayer.com/strips/iYfADWO1-120.vtt",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
