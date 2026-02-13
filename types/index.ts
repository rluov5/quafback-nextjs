// 权限类型
export type UserRole = 'user' | 'admin' | 'super_admin';

// 用户
export interface User {
  id: string;
  jobNo: string;
  name: string;
  password: string; // hash后的密码
  permission: UserRole;
  department?: string;
  processName?: string;
  createdAt: string;
}

// 管理类型枚举
export enum ManagementType {
  DEPARTMENT = 0,
  PROCESS = 1,
  PRODUCT_NAME = 2,
  CAR_MODEL = 3,
  PRODUCT_CODE = 4,
  FAILURE_ISSUE = 5,
  REPORTER = 6,
  DISPOSAL_MEASURE = 7,
  PROBLEM_LEVEL = 8,
  REWORK_CONFIRM_ITEM = 9,
}

// 反馈记录
export interface Feedback {
  id: string;
  date: string;
  productName: string;
  department: string;
  carModel: string;
  productCode: string;
  failureIssue: string;
  disposalMeasure: string;
  quantity: number;
  reporterId: string;
  reporterName: string;
  createdAt: string;
}

// 统计数据
export interface DailyStats {
  date: string;
  productName: string;
  carModel: string;
  issueCount: number;
}

// 返工记录
export interface ReworkRecord {
  id: string;
  serialNumber: string;
  productName: string;
  status: 'pending' | 'confirmed';
  createdAt: string;
  confirmedBy?: string;
  confirmedAt?: string;
}

// 返工确认结果
export interface ReworkConfirmation {
  id: string;
  recordId: string;
  confirmItemId: string;
  isQualified: boolean;
  notes?: string;
  createdAt: string;
}

// 应用状态
export interface AppState {
  users: User[];
  feedbacks: Feedback[];
  stats: DailyStats[];
  reworkRecords: ReworkRecord[];
  reworkConfirmations: ReworkConfirmation[];
  dictionaries: Record<ManagementType, string[]>;
}

// 认证状态
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
