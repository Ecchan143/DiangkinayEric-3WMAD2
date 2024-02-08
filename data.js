var APP_DATA = {
  "scenes": [
    {
      "id": "0-golden-shrine",
      "name": "Golden Shrine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0022205743761709584,
          "pitch": 0,
          "rotation": 0,
          "target": "2-lake-louise"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.50606745535414,
          "pitch": -0.08113207755341101,
          "title": "Golden Pavilion",
          "text": "<span style=\"color: rgb(249, 249, 249); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; white-space-collapse: preserve; background-color: rgb(23, 23, 23);\">The \"Golden Shrine\" in Kyoto refers to Kinkaku-ji, also known as the Temple of the Golden Pavilion. It's a UNESCO World Heritage Site famous for its stunning architecture covered in gold leaf. Originally a shogun's retirement villa, it's now a Zen Buddhist temple surrounded by beautiful gardens. Visitors can explore the grounds, enjoy the tranquil atmosphere, and admire the reflection of the pavilion in the pond. </span>"
        }
      ]
    },
    {
      "id": "1-neuschwanstein-castle",
      "name": "Neuschwanstein Castle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7141213026675608,
          "pitch": 0.2151670057312547,
          "rotation": 0,
          "target": "0-golden-shrine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0549325054553247,
          "pitch": -0.5664103253377881,
          "title": "<span style=\"color: rgb(249, 249, 249); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space-collapse: preserve; background-color: rgb(23, 23, 23);\">Neuschwanstein Castle</span>",
          "text": "<span style=\"color: rgb(249, 249, 249); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; white-space-collapse: preserve; background-color: rgb(23, 23, 23);\">Neuschwanstein Castle, located in Bavaria, Germany, is a 19th-century fairy-tale castle renowned for its stunning architecture and picturesque surroundings. Commissioned by King Ludwig II of Bavaria, it was intended as a personal retreat and homage to the romanticism of medieval chivalry and mythology.</span>"
        }
      ]
    },
    {
      "id": "2-lake-louise",
      "name": "lake louise",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4311614423126606,
          "pitch": -0.027962763460703144,
          "rotation": 0,
          "target": "1-neuschwanstein-castle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9325804422330037,
          "pitch": -0.16240767945049228,
          "title": "Lake Louise",
          "text": "<span style=\"color: rgb(249, 249, 249); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; white-space-collapse: preserve; background-color: rgb(23, 23, 23);\">Lake Louise is a stunning glacial lake located in Banff National Park, Alberta, Canada. It's renowned for its breathtaking turquoise waters, surrounded by majestic mountain peaks, including the iconic Mount Victoria and the towering glaciers of the Canadian Rockies.</span>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
