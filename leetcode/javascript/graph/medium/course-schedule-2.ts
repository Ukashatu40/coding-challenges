// Course Schedule II
// https://leetcode.com/problems/course-schedule-ii/

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: Map<number, number[]> = new Map();
  const inDegree: number[] = new Array(numCourses).fill(0);
  const queue: number[] = [];
  const result: number[] = [];

  // Build the graph and calculate in-degrees
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) {
      graph.set(prereq, []);
    }
    graph.get(prereq)!.push(course);
    inDegree[course]++;
  }

  // Enqueue courses with no prerequisites
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // Process the queue
  while (queue.length > 0) {
    const course = queue.shift()!;
    result.push(course);

    if (graph.has(course)) {
      for (const nextCourse of graph.get(course)!) {
        inDegree[nextCourse]--;
        if (inDegree[nextCourse] === 0) {
          queue.push(nextCourse);
        }
      }
    }
  }

  // Check if all courses are processed
  return result.length === numCourses ? result : [];
}
