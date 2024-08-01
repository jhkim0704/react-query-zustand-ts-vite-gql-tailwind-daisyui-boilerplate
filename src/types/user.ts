export interface User {
  id: string;
  name: string;
  rocket?: string;
}

export interface InsertUsersResponse {
  insert_users: null;
  returning: User[];
}

export type InsertUsersVariables = User[];

export interface InsertUsersGqlType {
  (objects: InsertUsersVariables): Promise<InsertUsersResponse>;
}
export interface GetUserQueryVariables {
  id: string;
}
// 파라미터에 타입을 직접 명시하지 않는 이유
// 1. 중복제거 및 유지보수(수정시 해당 타입을 참조하는 모든곳에서 자동 반영)
// 2. 타입 안정성(해당 타입이 수정되면 참조하는 모든 곳에서 오류가 발생하여 즉시 문제 인식 가능)
// 3. 명확성(타입명으로 명확한 의미를 나타냄)
// 4. 일관성 (여러곳에 같은 타입 사용시 실수로 다른 타입을 지정하는것을 방지)
export interface GetUserGqlType {
  (id: GetUserQueryVariables['id']): Promise<User>;
}

export interface GetUserResponse {
  user: User;
}

export interface GetUsersGqlType {
  (): Promise<User[]>;
}

export interface GetUsersResponse {
  users: User[];
}
