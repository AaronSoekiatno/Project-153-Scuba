AFRAME.registerComponent("diver-rotation",{
    schema: {
        rotationSpeed: { type: "number", default: 0 },
        ascentSpeed: { type: "number", default: 0 }
        
    },

    init: function(){
        window.addEventListener("keydown", (e) => {

      this.data.rotationSpeed = this.el.getAttribute("rotation");      
      this.data.ascentSpeed = this.el.getAttribute("position");

      var rotation = this.data.rotationSpeed;      
      var pos = this.data.ascentSpeed;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (rotation.x < 10) {
            rotation.x += 0.5;
          this.el.setAttribute("rotation", rotation);
        }
      }

      if (e.key === "ArrowLeft") {
        if (rotation.x > -10) {
            rotation.x -= 0.5;
          this.el.setAttribute("rotation", rotation);
        }
      }

      if (e.key === "ArrowUp") {
        if (rotation.z < 20) {
            rotation.z += 0.5;
          this.el.setAttribute("rotation", rotation);
        }
        if (pos.y < 2) {
            pos.y += 0.01;
          this.el.setAttribute("position", pos);
        }
      }
      
      if (e.key === "ArrowDown") {
        if (rotation.z > -10) {
            rotation.z -= 0.5;
          this.el.setAttribute("rotation", rotation);
        }
        if (diverPosition.y > -2) {
          diverPosition.y -= 0.01;
          this.el.setAttribute("position", diverPosition);
        }
      }
        })
    }
})