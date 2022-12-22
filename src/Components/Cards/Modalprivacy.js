import React from 'react'

function Modalprivacy() {
  return (
    <div style={{
      "background":"black"
   
    
  }}>
   <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
   "background":"black",
   "color":"white"
 
  }}
   >
  Privacy Policy
</div >

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Privacy Policy Maanof-Federation</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{
        "text-align" : "left"
      }}>
        <h5 align="left">Privacy Policy</h5>
   <p>Information Gathering and Use
We collect information from you in a number of ways, for example when you: <br />
• Make a donation <br />
• Partner withUs<br />
• Contact Us<br />
Use of Personal Information
We use the information you give us in the following ways: <br />
• To make sure we have an accurate record of all the donations we receive.<br />
• To email you with news and information about Maanof Fedeartion and 
our campaigns, but only if you have agreed to this.<br />
• To make sure you are receiving the most appropriate and relevant 
information for you.<br />
• To find out more about you and the people who are visiting our website, 
donating or joining our campaign.</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>  
      </div>
    </div>
  </div>
</div>
    
    </div>
  )
}

export default Modalprivacy
