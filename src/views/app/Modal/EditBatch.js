import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { EditBatchListRequest, GetOneBatchRequestList } from '../../../redux-saga/actions/BatchListAction'

export default function EditBatch(props) {
    const { listOne } = useSelector(state => state.batchListState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetOneBatchRequestList(props.id))
    }, [])

    useEffect(() => {
        console.log('isi listone')
        console.log(listOne)
    }, [listOne])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            bast_entity_id: listOne.bast_entity_id,
            bast_status: listOne.bast_status,
            bast_review: listOne.bast_review
        },
        onSubmit: async (values) => {
            let payload = new FormData()
            payload.append('bast_id', values.bast_id)
            payload.append('bast_status', values.bast_status)
            payload.append('bast_review', values.bast_review)


        }
    })

    return (
        <div>
            asdasd
            {/* <div>
                <label class="block text-sm font-medium text-gray-700"> Bast Status : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="bast_status"
                    id="bast_status"
                    value={formik.values.bast_status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="bast_status"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700"> Bast Review : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="bast_review"
                    id="bast_review"
                    value={formik.values.bast_review}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="bast_review"
                />

                <div>
                    <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}> Simpan </button>
                    <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}> Batal </button>
                </div>
            </div> */}
        </div>
    )
}
