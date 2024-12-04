import request from "../axios/index";

export function getMemberLevelList() {
  return request({ url: "/member-level-rule/list", method: "get" });
}

export function createMemberLevel(data) {
  return request({ url: "/member-level-rule", method: "post", data });
}

export function getMemberLevel(id) {
  return request({ url: `/member-level-rule/${id}`, method: "get" });
}

export function updateMemberLevel(id, data) {
  return request({ url: `/member-level-rule/${id}`, method: "put", data });
}

export function updateBounceBack(id, data) {
  return request({ url: `/member-level-rule/bounce-back/${id}`, method: "put", data });
}

export function getBounceBackExchangeReport(param) {
  return request({ url: "/report/bounce_back_exchange", method: "get", params: param });
}

export function changeStatusApi(id, status) {
  const endpoint = status
    ? `/member-level-rule/bounce-back-status/0`
    : `/member-level-rule/bounce-back-status/1`;

  return request({ url: endpoint, method: "put", data: { id } });
}