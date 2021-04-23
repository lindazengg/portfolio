import PropTypes from "prop-types"
import React from "react"

import "./layout.scss"

const ProjectPhoto = ({ imgsrc, targetId }) => (
	<>
<button type="button" class="imageBtn" data-toggle="modal" data-target={ "#" + targetId }>
  <img className="pscroll" src={ imgsrc }/>
</button>

<div class="modal fade bd-example-modal-lg" id={ targetId } tabindex="-1" role="dialog">
  <div class="modal-dialog  modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <img className="pscroll" src={ imgsrc }/>
    </div>
  </div>
</div>
</>
)

export default ProjectPhoto
