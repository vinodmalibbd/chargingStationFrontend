const Pages=["mainpage","find_station","register_station","booking_page","success_card","login_station"];
const Cities = [
    {
        name: "Ahmedabad",
        points: [
            { lat: 23.0225, lon: 72.5714 },
            { lat: 23.0396, lon: 72.5660 },
            { lat: 23.0258, lon: 72.5873 },
            { lat: 23.0334, lon: 72.5505 },
            { lat: 23.0551, lon: 72.5800 },
            { lat: 23.0113, lon: 72.5622 },
            { lat: 23.0302, lon: 72.5224 },
            { lat: 23.0422, lon: 72.5760 },
            { lat: 23.0171, lon: 72.5425 },
            { lat: 23.0136, lon: 72.5292 }
        ]
    },
    {
        name: "Bangalore",
        points: [
            { lat: 12.9716, lon: 77.5946 },
            { lat: 12.9352, lon: 77.6245 },
            { lat: 12.9241, lon: 77.6363 },
            { lat: 12.9205, lon: 77.6223 },
            { lat: 12.9373, lon: 77.6071 },
            { lat: 12.9291, lon: 77.5933 },
            { lat: 12.9446, lon: 77.6222 },
            { lat: 12.9530, lon: 77.6174 },
            { lat: 12.9653, lon: 77.6145 },
            { lat: 12.9784, lon: 77.6285 }
        ]
    },
    {
        name: "Chennai",
        points: [
            { lat: 13.0827, lon: 80.2707 },
            { lat: 13.0474, lon: 80.0593 },
            { lat: 13.0827, lon: 80.2707 },
            { lat: 13.0532, lon: 80.2400 },
            { lat: 13.0583, lon: 80.2090 },
            { lat: 13.0470, lon: 80.1790 },
            { lat: 13.0611, lon: 80.1499 },
            { lat: 13.0807, lon: 80.1217 },
            { lat: 13.0527, lon: 80.0930 },
            { lat: 13.0368, lon: 80.0669 }
        ]
    },
    {
        name: "Delhi",
        points: [
            { lat: 28.7041, lon: 77.1025 },
            { lat: 28.6129, lon: 77.2295 },
            { lat: 28.7041, lon: 77.1025 },
            { lat: 28.6358, lon: 77.2245 },
            { lat: 28.6227, lon: 77.2089 },
            { lat: 28.6129, lon: 77.1931 },
            { lat: 28.6069, lon: 77.1774 },
            { lat: 28.5999, lon: 77.1618 },
            { lat: 28.5933, lon: 77.1461 },
            { lat: 28.5862, lon: 77.1306 }
        ]
    },
    {
        name: "Hyderabad",
        points: [
            { lat: 17.3850, lon: 78.4867 },
            { lat: 17.4129, lon: 78.2673 },
            { lat: 17.3850, lon: 78.4867 },
            { lat: 17.4079, lon: 78.4688 },
            { lat: 17.4293, lon: 78.4893 },
            { lat: 17.4399, lon: 78.4745 },
            { lat: 17.4436, lon: 78.4557 },
            { lat: 17.4366, lon: 78.4397 },
            { lat: 17.4169, lon: 78.4287 },
            { lat: 17.3977, lon: 78.4258 }
        ]
    },
    {
        name: "Kolkata",
        points: [
            { lat: 22.5726, lon: 88.3639 },
            { lat: 22.5606, lon: 88.3630 },
            { lat: 22.5726, lon: 88.3639 },
            { lat: 22.5411, lon: 88.3400 },
            { lat: 22.5362, lon: 88.3307 },
            { lat: 22.5265, lon: 88.3247 },
            { lat: 22.5156, lon: 88.3165 },
            { lat: 22.5064, lon: 88.3083 },
            { lat: 22.4987, lon: 88.3018 },
            { lat: 22.4897, lon: 88.2940 }
        ]
    },
    {
        name: "Mumbai",
        points: [
            { lat: 19.0760, lon: 72.8777 },
            { lat: 19.1289, lon: 72.8265 },
            { lat: 19.0760, lon: 72.8777 },
            { lat: 19.1413, lon: 72.9352 },
            { lat: 19.1105, lon: 72.8833 },
            { lat: 19.0877, lon: 72.8454 },
            { lat: 19.0649, lon: 72.8282 },
            { lat: 19.0485, lon: 72.8101 },
            { lat: 19.0258, lon: 72.7862 },
            { lat: 19.0095, lon: 72.7605 }
        ]
    },
    {
        name: "Pune",
        points: [
            { lat: 18.5204, lon: 73.8567 },
            { lat: 18.5180, lon: 73.8331 },
            { lat: 18.5204, lon: 73.8567 },
            { lat: 18.5358, lon: 73.8901 },
            { lat: 18.5594, lon: 73.8922 },
            { lat: 18.5743, lon: 73.8919 },
            { lat: 18.5937, lon: 73.8870 },
            { lat: 18.6156, lon: 73.8727 },
            { lat: 18.6356, lon: 73.8505 },
            { lat: 18.6465, lon: 73.8237 }
        ]
    },
    {
        name: "Jaipur",
        points: [
            { lat: 26.9124, lon: 75.7873 },
            { lat: 26.9081, lon: 75.7770 },
            { lat: 26.9124, lon: 75.7873 },
            { lat: 26.9220, lon: 75.7930 },
            { lat: 26.9305, lon: 75.7991 },
            { lat: 26.9396, lon: 75.8064 },
            { lat: 26.9495, lon: 75.8135 },
            { lat: 26.9602, lon: 75.8200 },
            { lat: 26.9698, lon: 75.8260 },
            { lat: 26.9791, lon: 75.8304 }
        ]
    },
    {
        name: "Lucknow",
        points: [
            { lat: 26.8467, lon: 80.9462 },
            { lat: 26.8476, lon: 80.9467 },
            { lat: 26.8467, lon: 80.9462 },
            { lat: 26.8434, lon: 80.9428 },
            { lat: 26.8391, lon: 80.9389 },
            { lat: 26.8346, lon: 80.9349 },
            { lat: 26.8298, lon: 80.9304 },
            { lat: 26.8249, lon: 80.9256 },
            { lat: 26.8199, lon: 80.9206 },
            { lat: 26.8147, lon: 80.9153 }
        ]
    },
    // Add more cities here...
];
const EVpumpIcon='<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 444.406 444.406" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#f00000;" d="M222.208,0c-66.672,0-120.906,54.234-120.906,120.916c0,48.704,28.959,90.736,70.55,109.875 l46.076,213.615h8.559l46.076-213.615c41.582-19.15,70.541-61.171,70.541-109.875C343.104,54.234,288.889,0,222.208,0z M222.208,215.823c-52.329,0-94.917-42.578-94.917-94.917c0-52.349,42.578-94.907,94.917-94.907s94.907,42.569,94.907,94.907 S274.537,215.823,222.208,215.823z"></path> </g> </g> </g> </g></svg>'
