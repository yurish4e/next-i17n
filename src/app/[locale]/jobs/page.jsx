import Link from "next/link";
import '../style.css';

export default function jobsList({children, params: {locale}}) {
  return (
    <main>
    <h1 className="py-2 text-center font-bold text-2xl">Jobs List</h1>
  
    <div className="job__cart">
    <h2>Job 1</h2>
    <Link className="p-1 bg-slate-400 border-r-4" href={`/${locale}/jobs/1`}>Job 1</Link>
    </div>
    <div className="job__cart">
    <h2>Job 2</h2>
    <Link className="p-1 bg-slate-400 border-r-4" href={`/${locale}/jobs/2`}>Job 2</Link>
    </div>
    <div className="job__cart"><h2>Job 3</h2>
    <Link className="p-1 bg-slate-400 border-r-4" href={`/${locale}/jobs/3`}>Job 3</Link></div>
    
    
    </main>
  )
}
