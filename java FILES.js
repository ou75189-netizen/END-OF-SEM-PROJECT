*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
}

body{
  display:flex;
  background:#f4f6f9;
}

.sidebar{
  width:250px;
  height:100vh;
  background:#0f172a;
  color:white;
  padding:20px;
}

.logo-section{
  text-align:center;
  margin-bottom:40px;
}

.logo-section img{
  width:80px;
}

.sidebar nav{
  display:flex;
  flex-direction:column;
  gap:15px;
}

.sidebar nav a{
  text-decoration:none;
  color:white;
  padding:12px;
  border-radius:8px;
  transition:0.3s;
}

.sidebar nav a:hover{
  background:#1e293b;
}

.main-content{
  flex:1;
  padding:30px;
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  margin-top:30px;
}

.card{
  background:white;
  padding:25px;
  border-radius:15px;
  box-shadow:0 2px 10px rgba(0,0,0,0.08);
}

.card h3{
  margin-bottom:10px;
  color:#64748b;
}

.card p{
  font-size:24px;
  font-weight:bold;
}

.quick-actions{
  margin-top:40px;
  display:flex;
  gap:20px;
}

.btn{
  background:#2563eb;
  color:white;
  padding:14px 20px;
  border-radius:10px;
  text-decoration:none;
}
