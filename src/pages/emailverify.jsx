import React from 'react'
import { Info, X } from 'lucide-react'
// import { SendEmailVerification } from '../app/firebase/auth'
import { SendVerification } from '../app/store/Slices/FirebaseSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const emailverify = () => {
  const dispatch = useDispatch()
  console.log("emailverify")
  const verify = ()=>{
    dispatch(SendVerification());
  }
  return (
    <div className="rounded-md border-l-4 border-black bg-gray-100 p-4 mt-10">
      <div className="flex items-center justify-between space-x-4">
        <div>
          <Info className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-medium">
            Please Verify Your Email!
          </p>
        </div>
        <div>
          <Link to={'/'}>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-grey/80"
              onClick={verify}
            >
              Verify
            </button>
          </Link>
          {/* <X className="h-6 w-6 cursor-pointer" /> */}
        </div>
      </div>
    </div>
  )
}

export default emailverify