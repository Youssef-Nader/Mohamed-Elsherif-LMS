import test from "node:test";
import assert from "node:assert/strict";
import { levels, getLevelFilter, getCoursesUrl, filterCourses } from "./levels.js";
import { courses } from "./courses.js";

// Verify the exact link -> URL filter -> matching courses contract.
test("each level link selects only its own courses", () => {
  for (const level of levels) {
    const url = new URL(getCoursesUrl(level.id), "https://example.com");
    assert.equal(url.pathname, "/courses");
    const selected = getLevelFilter(url.search);
    assert.equal(selected, level.id);
    const result = filterCourses(courses, selected);
    assert.ok(result.length > 0);
    assert.ok(result.every((course) => course.level === level.id));
  }
});

test("missing or unsupported filters show the complete catalog", () => {
  for (const search of [
    "",
    "?level=all",
    "?level=invalid",
    "?level=",
    "?level=%3Cscript%3E",
  ]) {
    assert.equal(getLevelFilter(search), "all");
    assert.deepEqual(filterCourses(courses, getLevelFilter(search)), courses);
  }
  assert.equal(getCoursesUrl(), "/courses");
});

test("catalog records use known levels and unique identifiers", () => {
  assert.equal(new Set(levels.map((level) => level.id)).size, levels.length);
  assert.equal(new Set(courses.map((course) => course.id)).size, courses.length);
  assert.ok(courses.every((course) => levels.some((level) => level.id === course.level)));
  assert.deepEqual(filterCourses([], "beginner"), []);
});
