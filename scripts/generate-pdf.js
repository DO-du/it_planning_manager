const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3001';
const OUTPUT_DIR = path.join(__dirname, '../pdfs');

// PDF로 변환할 페이지 목록
const pages = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/application', name: 'application' },
  { path: '/skills', name: 'skills' },
  { path: '/experience', name: 'experience' },
  { path: '/projects', name: 'projects' },
  { path: '/projects/jenkins-batch-control', name: 'project-jenkins-batch-control' },
  { path: '/projects/sentry-platform-modernization', name: 'project-sentry-platform-modernization' },
  { path: '/projects/jenkins-split-dr-migration', name: 'project-jenkins-split-dr-migration' },
  { path: '/projects/policy-change-transition', name: 'project-policy-change-transition' },
  { path: '/projects/devops-end-to-end', name: 'project-devops-end-to-end' },
  { path: '/projects/issue-response-feature', name: 'project-issue-response-feature' },
];

async function generatePDF() {
  // 출력 디렉토리 생성
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('🚀 PDF 생성 시작...\n');
  console.log(`📁 출력 디렉토리: ${OUTPUT_DIR}\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const pageInfo of pages) {
      const page = await browser.newPage();
      const url = `${BASE_URL}${pageInfo.path}`;
      
      console.log(`📄 처리 중: ${pageInfo.name} (${url})`);

      try {
        // 페이지 로드 (네트워크가 유휴 상태가 될 때까지 대기)
        await page.goto(url, {
          waitUntil: 'networkidle0',
          timeout: 30000,
        });

        // 추가 대기 (애니메이션 등이 완료될 시간)
        await page.waitForTimeout(2000);

        // PDF 생성
        const pdfPath = path.join(OUTPUT_DIR, `${pageInfo.name}.pdf`);
        await page.pdf({
          path: pdfPath,
          format: 'A4',
          printBackground: true,
          margin: {
            top: '20mm',
            right: '15mm',
            bottom: '20mm',
            left: '15mm',
          },
        });

        console.log(`✅ 생성 완료: ${pdfPath}\n`);
      } catch (error) {
        console.error(`❌ 오류 발생 (${pageInfo.name}):`, error.message);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  console.log('🎉 모든 PDF 생성 완료!');
  console.log(`📁 출력 위치: ${OUTPUT_DIR}`);
}

// 실행
generatePDF().catch(console.error);

