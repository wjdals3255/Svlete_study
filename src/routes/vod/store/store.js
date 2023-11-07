import { writable } from "svelte/store";
// readable, derived, get 등
// 쓰기가능한 빈문자열 형태로 초기화, 외부에서 사용
export let storeName = writable('JeongMin')