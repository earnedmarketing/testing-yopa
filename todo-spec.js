describe('YOPA Homepage Test', function() {
	it('should have correct meta data', function() {
		var url = "https://www.yopa.co.uk"
		var title = "Online Estate Agents – Sell Your House Online | YOPA"
		var description = "Our team of property managers and agents brings 30 years of experience to every sale, helping you sell your property quickly, easily and affordably."

		browser.get(url);
		
		var descriptionElement = element(by.css('meta[name=description]')).getAttribute("content");
		expect(browser.getTitle()).toEqual(title);
		expect(descriptionElement).toEqual(description);

	});
});
