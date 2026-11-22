import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Kota's Portfolio",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-16 leading-relaxed">
        <h1 className="mb-10 text-2xl font-bold">
          プライバシーポリシー / Privacy Policy
        </h1>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold">日本語</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              このサイトの運営者は、Google ドライブ用のツール「rclone」を個人で使うために
              Google の認証を利用しています。
            </li>
            <li>
              rclone は、運営者本人が自分の Google ドライブと自分の PC
              の間でファイルをアップロード・ダウンロードするためだけに使います。
            </li>
            <li>
              扱うのは、本人の Google ドライブ上のファイルと、その名前やサイズなどの情報だけです。
            </li>
            <li>
              認証情報は本人の PC 内にだけ保存し、外部のサーバーには送りません。
            </li>
            <li>
              データを第三者に渡したり、広告や分析に使ったりすることはありません。
            </li>
            <li>
              お問い合わせは、このサイトの
              <Link href="/#contact" className="link">
                Contact
              </Link>
              からお願いします。
            </li>
          </ul>
          <p className="mt-6">制定日：2026年11月22日</p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold">English</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The operator of this site uses Google authentication to run
              &quot;rclone&quot;, a tool for Google Drive, for personal use.
            </li>
            <li>
              rclone is used only by the operator to upload and download files
              between the operator&apos;s own Google Drive and the
              operator&apos;s own PC.
            </li>
            <li>
              It handles only the files in the operator&apos;s own Google Drive
              and information about them, such as names and sizes.
            </li>
            <li>
              Authentication credentials are stored only on the operator&apos;s
              PC and are never sent to any external server.
            </li>
            <li>
              No data is shared with third parties or used for advertising or
              analytics.
            </li>
            <li>
              For inquiries, please use the{" "}
              <Link href="/#contact" className="link">
                Contact
              </Link>{" "}
              form on this site.
            </li>
          </ul>
          <p className="mt-6">Effective date: November 22, 2026</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
