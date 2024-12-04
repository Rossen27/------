import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMemberLevelList,
  createMemberLevel,
  getMemberLevel,
  updateMemberLevel,
  updateBounceBack,
  getBounceBackExchangeReport,
  changeStatusApi,
} from "../api/memberApi";

// **1. 列表查詢**
export const fetchMembers = createAsyncThunk("member/fetchMembers", async () => {
  const response = await getMemberLevelList();
  return response.data;
});

// **2. 新增資料**
export const addMember = createAsyncThunk("member/addMember", async (newMember) => {
  const response = await createMemberLevel(newMember);
  return response.data;
});

// **3. 更新資料**
export const updateMember = createAsyncThunk("member/updateMember", async ({ id, data }) => {
  const response = await updateMemberLevel(id, data);
  return response.data;
});

// **4. 查詢兌換紀錄**
export const fetchExchangeRecords = createAsyncThunk(
  "member/fetchExchangeRecords",
  async (queryParams) => {
    const response = await getBounceBackExchangeReport(queryParams);
    return response.data;
  }
);

// **5. 狀態變更**
export const changeStatus = createAsyncThunk(
  "member/changeStatus",
  async ({ id, status }) => {
    const response = await changeStatusApi(id, status);
    return response.data;
  }
);

// **6. Redux Slice**
const memberSlice = createSlice({
  name: "member",
  initialState: {
    members: [], // 成員列表
    exchangeRecords: [], // 兌換紀錄
    status: "idle", // 全局狀態: idle | loading | succeeded | failed
    error: null, // 全局錯誤信息
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // **1. 列表查詢**
      .addCase(fetchMembers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // **2. 新增資料**
      .addCase(addMember.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addMember.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.members.push(action.payload); // 即時將新成員添加到列表中
      })
      .addCase(addMember.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // **3. 更新資料**
      .addCase(updateMember.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateMember.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.members.findIndex((member) => member.id === action.payload.id);
        if (index !== -1) {
          state.members[index] = action.payload; // 更新成員資料
        }
      })
      .addCase(updateMember.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // **4. 查詢兌換紀錄**
      .addCase(fetchExchangeRecords.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchExchangeRecords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.exchangeRecords = action.payload; // 更新兌換紀錄
      })
      .addCase(fetchExchangeRecords.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // **5. 狀態變更**
      .addCase(changeStatus.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.members.findIndex((member) => member.id === action.payload.id);
        if (index !== -1) {
          state.members[index].status = action.payload.status; // 更新成員的狀態
        }
      })
      .addCase(changeStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default memberSlice.reducer;