import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Stats() {
  return (
    <section className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-orange-900/50 border-orange-500 transform hover:scale-105 transition-all">
            <CardHeader>
              <CardTitle className="text-center text-4xl bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text">
                100K+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-orange-200">
              Community Members
            </CardContent>
          </Card>
          <Card className="bg-orange-900/50 border-orange-500 transform hover:scale-105 transition-all">
            <CardHeader>
              <CardTitle className="text-center text-4xl bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text">
                50M+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-orange-200">
              Total Volume
            </CardContent>
          </Card>
          <Card className="bg-orange-900/50 border-orange-500 transform hover:scale-105 transition-all">
            <CardHeader>
              <CardTitle className="text-center text-4xl bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text">
                10K+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-orange-200">
              Holders
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
