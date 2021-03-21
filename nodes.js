
// <defs>
//     <pattern id="amazon" height="100%" width="100%" patternContentUnits="objectBoundingBox">
//         <image height="1" width="1" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink"
//                xlink:href="amazon.png"></image>
//     </pattern>
// </defs>



var defs = svg.append("defs");

defs.append("pattern")
    .attr("id", "amazon")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
    .attr("height", "1")
    .attr("width", "1")
    .attr("preserveAspectRatio", "none")
    .attr("xmlns", "http://www.w3.org/1999/xLink")
    .attr("xlink:href", "amazon.png")
