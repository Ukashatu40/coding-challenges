function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const courseGraph = new Map<number, number[]>();

  for (let pre of prerequisites) {
    if (courseGraph.has(pre[1])) {
      courseGraph.get(pre[1]).push(pre[0]);
    } else {
      courseGraph.set(pre[1], [pre[0]]);
    }
  }

  const visited = new Set();

  for (let currentCourse = 0; currentCourse < numCourses; currentCourse++) {
    if (courseSchedule(currentCourse, visited, courseGraph) === false)
      return false;
  }

  return true;
}

function courseSchedule(course, visited, courseGraph): boolean {
  if (visited.has(course)) return false;

  if (courseGraph.get(course) == null) return true;

  visited.add(course);
  for (let pre of courseGraph.get(course)) {
    if (courseSchedule(pre, visited, courseGraph) === false) {
      return false;
    }
  }

  visited.delete(course);
  courseGraph.set(course, null);

  return true;
}
