document.addEventListener('DOMContentLoaded', function() {
    const days = [
      {
        date: '24/06/2024',
        content: `
          <p>TP. HCM - INCHEON (Nghỉ đêm trên máy bay)</p>
          <p>Hướng dẫn viên Vietravel đón Quý khách tại Ga đi quốc tế để làm thủ tục đáp chuyến bay đi Seoul...</p>
        `
      },
      {
        date: '25/06/2024',
        content: `
          <p>INCHEON - SEOUL - JEJU (Ăn sáng, trưa, tối)</p>
          <p>Đến sân bay quốc tế Incheon, Trưởng đoàn Vietravel hỗ trợ làm thủ tục nhập cảnh...</p>
          <p>Xe đón đoàn đi dùng bữa sáng và bắt đầu di chuyển tham quan:</p>
          <p>- Cung điện Hoàng Gia Gyeongbok, được coi là công trình nghệ thuật nổi tiếng có phong cách và kiến trúc độc đáo và đẹp nhất Seoul.</p>
          <p>- “Nhà Xanh” (Cheongwadae) - Là nơi ở và làm việc của các đời Tổng thống Hàn Quốc. (tham quan chụp hình bên ngoà</p>
          <p>
        `
      },
      {
        date: '26/06/2024',
        content:`
        <p> ĐẢO JEJU (Ăn sáng, trưa, tối)</p>
        <p>Đoàn dùng bữa sáng tại khách sạn, xe đón đoàn đi tham quan:
- Đỉnh Núi Seongsan di sản thiên nhiên thế giới được Unesco công nhận, nơi có miệng núi lửa và 99 tảng đá bao quanh trong giống như một chiếc vương miệng xanh khổng lồ.</p>
<p>- Tham quan Đồi Camellia - Thiên đường để sống ảo dành cho dân du lịch mê hoa, yêu thích chụp ảnh (các loại hoa tại đây sẽ thay đổi theo mùa trong năm)</p>

        `
      },
      {
        date:'27/06/2024',
        content:`
        <p>JEJU - SEOUL -ĐẢO NAMI (Ăn sáng, trưa, tối)</p>
        <p>Sau khi dùng bữa sáng và làm thủ tục trả phòng, đoàn khởi hành đến sân bay Jeju và đáp chuyến bay về lại thủ đô Seoul.</p>
        <p>Đến Seoul: đoàn tham quan mua sắm tại cửa hàng nhân sâm đỏ và cửa hàng mỹ phẩm<p>
        `
      },
      {
        date:'28/06/2024',
        content:`
        <p>SEOUL - CÔNG VIÊN EVERLAND (Ăn sáng, trưa, tối)</p>
        <p>Sau khi dùng bữa sáng và làm thủ tục trả phòng, đoàn khởi hành đến sân bay Jeju và đáp chuyến bay về lại thủ đô Seoul.</p>
        <p>Đến Seoul: đoàn tham quan mua sắm tại cửa hàng nhân sâm đỏ và cửa hàng mỹ phẩm<p>
        `
      },
      {
        date:'29/06/2024',
        content:`
        <p> SEOUL – INCHEON - TP HỒ CHÍ MINH (Ăn sáng, trưa)</p>
        <p>Sau khi dùng bữa sáng và làm thủ tục trả phòng, đoàn khởi hành đến sân bay Jeju và đáp chuyến bay về lại thủ đô Seoul.</p>
        <p>Đến Seoul: đoàn tham quan mua sắm tại cửa hàng nhân sâm đỏ và cửa hàng mỹ phẩm<p>
        `
      },
      
    ];
  
    const rightPanel = document.querySelector('.right-panel');
  
    days.forEach((day, index) => {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day-content');
      dayElement.innerHTML = `
        <h2>Ngày ${index + 1} - ${day.date}</h2>
        ${day.content}
      `;
      rightPanel.appendChild(dayElement);
  
      const leftPanelDays = document.querySelectorAll('.day-section');
      leftPanelDays[index].addEventListener('click', function() {
        
        leftPanelDays.forEach(day => {
          day.classList.remove('active');
        });
       
        this.classList.add('active');
  
       
        dayElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  