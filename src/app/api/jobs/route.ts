export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword") || 'developer'
    const location = searchParams.get("location") || 'remote'
    const industry = searchParams.get("industry") || 'it-jobs'
    const full_time = searchParams.get("full_time") || '&full_time=1'
    const part_time = searchParams.get("part_time") || ''
    const permanent = searchParams.get("permanent") || '&permanent=1'
    const contract = searchParams.get("contract") || ''

    const APP_ID = process.env.ADZUNA_APP_ID;
    const APP_KEY = process.env.ADZUNA_APP_KEY;
  
    const url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=5&what=${encodeURIComponent(keyword)}&where=${encodeURIComponent(location)}&category=${encodeURIComponent(industry)}${full_time}${part_time}${permanent}${contract}`;
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
  
    } catch (error: any) {
      console.error("Error fetching Adzuna data:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }