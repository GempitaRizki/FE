import React,{ useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doGetBatchBatchNameRequest } from "../../../redux-saga/actions/Batch";
import { doGetBatchStudentScoreRequest, doEditBatchStatusRequest, doAddReviewBatchRequest } from "../../../redux-saga/actions/BatchStudent";
import { doGetBatchUsernameRequest } from "../../../redux-saga/actions/Ufo"
import config from "../../../config/config"

// import { BiDotsVertical } from 'react:icons/bi'

export default function Batch() {
    const dispatch = useDispatch ()
    const [ display , setDisplay] = useState(false)
    const [ refresh , setRefresh ] = useState(false)
    const [ id, setId ] = useState ()
    const { batch } = useSelector(state => state.batchStated)
    const { batchStudent } = useSelector(state => state.batchStudentStated)
    const { ufo } = useSelector(state => state.ufoStated)

    useEffect(() => {
        dispatch(doGetBatchBatchNameRequest())
        dispatch(doGetBatchStudentScoreRequest())
        dispatch(doEditBatchStatusRequest())
        dispatch(doAddReviewBatchRequest())
        dispatch(doGetBatchUsernameRequest())

    },[])
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {
                            <>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">bast_status</th>
                                            <th scope="col" className="px-6 py-3">bast_review</th>
                                            <th scope="col" className="px-6 py-3">bast_total_score</th>

                                        </tr>

                                        <tr>
                                            <th scope="col" className="px-6 py-3">user_name</th>
                                        </tr>

                                        <tr>
                                            <th scope="col" className="px-6 py-3">cate_name</th>
                                        </tr>

                                    </thead>
                                    <tbody className="overscroll-auto md:overscroll-contain">
                                        {
                                            batchStudent && batchStudent.map(g => {
                                                return (
                                                    <tr key={g.bast_entity_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{g.bast_entity_id}</td>
                                                        <td className="px-6 py-2">{g.bast_status}</td>
                                                        <td className="px-6 py-2">{g.bast_review}</td>
                                                        <td className="px-6 py-2">{g.bast_total_score}</td>
                                                        <td className="px-6 py-2">
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                }
            </div>
        </div>
    )
}