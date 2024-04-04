$(document).ready(function() {
    // Defines the original images for each park
    var originalImages = {
      'Paley Park': 'https://assets-global.website-files.com/581110f944272e4a11871c01/59371a6f0ccd8d78aca85db0_Paley-Park-Tree-Canopy.jpg',
      'Bryant Park': 'https://park.marmaranyc.com/hs-fs/hubfs/Explore%20Widget/Bryant%20Park.jpg?width=2000&height=1333&name=Bryant%20Park.jpg',
      'New York Public Library': 'https://loving-newyork.com/wp-content/uploads/2016/06/new-york-public-library-180508105745004.jpg',
      'Grand Central Terminal': 'https://mymodernmet.com/wp/wp-content/uploads/2021/03/grand-central-terminal-nyc-1.jpg'
    };
  
    // Event handler for button clicks
    $('.button').on('click', function() {
      var park = $(this).data('park');
      var color;
      var contentHtml = '';
      
      switch (park) {
        case 'Paley Park':
          color = '#FFB6C1'; 
          contentHtml = createContent(park, 'Paley Park, near Fifth Avenue, prioritizes visitors needs with movable chairs and a soothing waterfall.  Its serene atmosphere offers a spiritual retreat in the heart of New York City.');
          break;
        case 'Bryant Park':
          color = '#ADD8E6'; 
          contentHtml = createContent(park, 'Bryant Park, revamped in the 1980s, is a bustling urban oasis with a central green, game tables, and food kiosks.  Its vibrant ambiance attracts locals, workers, and tourists alike.');
          break;
        case 'New York Public Library':
          color = '#D3D3D3'; 
          contentHtml = createContent(park, 'The New York Public Library blends elegance with accessibility, welcoming all with its stunning architecture and inclusive design.  Inside, a regal reading room mirrors European palaces, while outside, various spaces foster community engagement and connection.');
          break;
        case 'Grand Central Terminal':
          color = '#FFFFE0'; 
          contentHtml = createContent(park, 'Grand Central Terminal, the worlds largest train station, guides commuters with ease through its grand entrances to the iconic Main Concourse.  Its bustling yet serene atmosphere makes it a quintessential New York landmark. ');
          break;
      }
      $('body').css('background-color', color);
      $('#content').html(contentHtml).fadeIn();
    });
  
    // Changes the image on mouse enter
    $(document).on('mouseenter', '.park-image', function() {
      var park = $(this).data('park');
      var hoverImageSrc = '';
      switch (park) {
        case 'Paley Park':
          hoverImageSrc = 'https://appassets.mvtdev.com/map/41/s/121/14427199.jpg';
          break;
        case 'Bryant Park':
          hoverImageSrc = 'https://appassets.mvtdev.com/map/41/s/121/19030300.jpg';
          break;
        case 'New York Public Library':
          hoverImageSrc = 'https://appassets.mvtdev.com/map/41/s/121/19021486.jpg';
          break;
        case 'Grand Central Terminal':
          hoverImageSrc = 'https://appassets.mvtdev.com/map/41/s/121/61746667.jpg';
          break;
      }
      $(this).attr('src', hoverImageSrc);
    });
  
    // Reverts the image on mouse leave
    $(document).on('mouseleave', '.park-image', function() {
      var park = $(this).data('park');
      $(this).attr('src', originalImages[park]);
    });
  
    // Creates the HTML content for each park and Call to action for users
    function createContent(park, text) {
      return `<div>
                <p>${text}</p>
                <p class="cta"><strong>How to get to ${park}?</strong> Move your mouse over the image, there's a little surprise~</p>
                <img class="park-image" data-park="${park}" src="${originalImages[park]}" alt="${park}">
              </div>`;
    }
  })