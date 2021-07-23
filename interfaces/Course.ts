export interface Course {
  id: BigInt,
  price: number
}

export interface CourseResponse {
  data: Course[]
}
