export default async function fetchJobs(query = {}) {
  const searchParams = new URLSearchParams(query as Record<string, string>).toString();
  const response = await fetch(`/api/jobs?${searchParams}`);
  if (!response.ok) throw new Error("Failed to fetch jobs");
  const data = await response.json();
  return data.results;
}