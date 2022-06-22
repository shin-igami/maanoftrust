import React from 'react'
import ApplyCard from '../../Components/Cards/Apply Card/ApplyCard'
import FormCards from '../../Components/Cards/FormCards/FormCards'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import contactjobimg from '../../image/Contact_job.jpg'
import student from '../../image/student.png'
const Jobs = () => {
  return (
    <>
             <Headingimage cardimg={contactjobimg} Title="Jobs" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
             <ApplyCard image={student} title="Apply Here" description="lorem jjiuuy hgiuhyui hiuhiu hihih hiuhiuh ihjih iuh iuhiuh ihi hiuh iuh iuhiuhiuhi iuhi hih iuh iu hi hi hi hi uh ih iuhiuhiuhuih u hjgjhg uyguguy yuygtuyg yguy"/>
             <ApplyCard image={student} title="Apply Here" description="lorem jjiuuy hgiuhyui hiuhiu hihih hiuhiuh ihjih iuh iuhiuh ihi hiuh iuh iuhiuhiuhi iuhi hih iuh iu hi hi hi hi uh ih iuhiuhiuhuih u hjgjhg uyguguy yuygtuyg yguy"/>
             <ApplyCard image={student} title="Apply Here" description="lorem jjiuuy hgiuhyui hiuhiu hihih hiuhiuh ihjih iuh iuhiuh ihi hiuh iuh iuhiuhiuhi iuhi hih iuh iu hi hi hi hi uh ih iuhiuhiuhuih u hjgjhg uyguguy yuygtuyg yguy"/>
    </>
    
  )
}

export default Jobs