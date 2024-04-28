"use client";
import { Employeeform } from '@/components/employee-form'
import { Formwrapper } from '@/components/ui/form-wrapper'
import React from 'react'

 export const EmployeeCreatePage = () => {
  return (
    <div className='flex justify-center items-center mt-[40px]'>
    
      <Formwrapper title="Create a new employee">
        <Employeeform />
      </Formwrapper>
      </div>
    
  )
}

export default EmployeeCreatePage

