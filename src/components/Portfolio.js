import React, {Component} from "react";

class Portfolio extends Component {
    render() {
        return(
            <>

<div className="bgimg-2 w3-display-container w3-opacity-min">
  <div className="w3-display-middle">
    <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
  </div>
</div>


<div className="w3-content w3-container w3-padding-64" id="portfolio">
  <h3 className="w3-center">MY WORK</h3>
  <p className="w3-center"><em>Here are some of my latest lorem work ipsum tipsum.<br/> Click on the images to make them bigger</em></p><br/>

  <div className="w3-row-padding w3-center">
    <div className="w3-col m3">
      {/* <img src="/w3images/p1.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="The mist over the mountains"/> */}
    </div>

    <div className="w3-col m3">
      {/* <img src="/w3images/p2.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Coffee beans"/> */}
    </div>

    <div className="w3-col m3">
      {/* <img src="/w3images/p3.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Bear closeup"/> */}
    </div>

    <div className="w3-col m3">
      {/* <img src="/w3images/p4.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Quiet ocean"/> */}
    </div>
  </div>

  <div className="w3-row-padding w3-center w3-section">
    <div className="w3-col m3">
      {/* <img src="/w3images/p5.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="The mist"/> */}
    </div>

    <div className="w3-col m3">
      {/* <img src="/w3images/p6.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="My beloved typewriter"/> */}
    </div>

    <div className="w3-col m3">
      {/* <img src="/w3images/p7.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Empty ghost train"/> */}
    </div>

    <div className="w3-col m3">
      {/* <img src="/w3images/p8.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Sailing"/> */}
    </div>
    <button className="w3-button w3-padding-large w3-light-grey">LOAD MORE</button>
  </div>
</div>


<div id="modal01" className="w3-modal w3-black" >
  <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i className="fa fa-remove"></i></span>
  <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    {/* <img id="img01" class="w3-image"/> */}
    <p id="caption" className="w3-opacity w3-large"></p>
  </div>
</div>



</>

      );
}
}

export default Portfolio