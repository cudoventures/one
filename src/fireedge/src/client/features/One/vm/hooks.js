/* ------------------------------------------------------------------------- *
 * Copyright 2002-2021, OpenNebula Project, OpenNebula Systems               *
 *                                                                           *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may   *
 * not use this file except in compliance with the License. You may obtain   *
 * a copy of the License at                                                  *
 *                                                                           *
 * http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                           *
 * Unless required by applicable law or agreed to in writing, software       *
 * distributed under the License is distributed on an "AS IS" BASIS,         *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 * See the License for the specific language governing permissions and       *
 * limitations under the License.                                            *
 * ------------------------------------------------------------------------- */
/* eslint-disable jsdoc/require-jsdoc */
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

import * as actions from 'client/features/One/vm/actions'

export const useVm = () => (
  useSelector(state => state.one.vms)
)

export const useVmApi = () => {
  const dispatch = useDispatch()

  const unwrapDispatch = useCallback(
    action => dispatch(action).then(unwrapResult)
    , [dispatch]
  )

  return {
    getVm: id => unwrapDispatch(actions.getVm({ id })),
    getVms: options => unwrapDispatch(actions.getVms(options)),
    terminateVm: id => unwrapDispatch(actions.terminateVm({ id })),
    updateUserTemplate: (id, template, replace) =>
      unwrapDispatch(actions.updateUserTemplate({ id, template, replace })),
    rename: (id, name) => unwrapDispatch(actions.rename({ id, name })),
    resize: (id, data) => unwrapDispatch(actions.resize({ id, ...data })),
    changePermissions: (id, permissions) =>
      unwrapDispatch(actions.changePermissions({ id, permissions })),
    changeOwnership: (id, ownership) =>
      unwrapDispatch(actions.changeOwnership({ id, ownership })),
    attachDisk: (id, template) => unwrapDispatch(actions.attachDisk({ id, template })),
    detachDisk: (id, disk) => unwrapDispatch(actions.detachDisk({ id, disk })),
    saveAsDisk: (id, data) => unwrapDispatch(actions.saveAsDisk({ id, ...data })),
    resizeDisk: (id, data) => unwrapDispatch(actions.resizeDisk({ id, ...data })),
    createDiskSnapshot: (id, data) =>
      unwrapDispatch(actions.createDiskSnapshot({ id, ...data })),
    renameDiskSnapshot: (id, data) =>
      unwrapDispatch(actions.renameDiskSnapshot({ id, ...data })),
    revertDiskSnapshot: (id, data) =>
      unwrapDispatch(actions.revertDiskSnapshot({ id, ...data })),
    deleteDiskSnapshot: (id, data) =>
      unwrapDispatch(actions.deleteDiskSnapshot({ id, ...data })),
    attachNic: (id, template) => unwrapDispatch(actions.attachNic({ id, template })),
    detachNic: (id, nic) => unwrapDispatch(actions.detachNic({ id, nic })),
    createSnapshot: (id, data) =>
      unwrapDispatch(actions.createSnapshot({ id, ...data })),
    revertSnapshot: (id, snapshot) =>
      unwrapDispatch(actions.revertSnapshot({ id, snapshot })),
    deleteSnapshot: (id, snapshot) =>
      unwrapDispatch(actions.deleteSnapshot({ id, snapshot })),
    addScheduledAction: (id, data) =>
      unwrapDispatch(actions.addScheduledAction({ id, ...data })),
    updateScheduledAction: (id, data) =>
      unwrapDispatch(actions.updateScheduledAction({ id, ...data })),
    deleteScheduledAction: (id, data) =>
      unwrapDispatch(actions.deleteScheduledAction({ id, ...data }))
  }
}